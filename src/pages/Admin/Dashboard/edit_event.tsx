import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import API, { EventDetail } from 'API';
import Swal from 'sweetalert2';

const EditEvent = (props: any) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [detailChange, setDetailChange] = useState(false);
    const editorChange = (editorState: EditorState) => {
        setEditorState(editorState);
        setDetailChange(true);
    };
    const handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            editorChange(newState);
            return 'handled';
        }

        return 'not-handled';
    };
    const editorButtonClick = (type: string) => {
        editorChange(RichUtils.toggleInlineStyle(editorState, type));
    };

    const eventId = props.match.params.id;

    const [name, setName] = useState('');
    const [nameChange, setNameChange] = useState(false);
    const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setNameChange(true);
    };

    const [location, setLocation] = useState('');
    const [locationChange, setLocationChange] = useState(false);
    const locationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
        setLocationChange(true);
    };

    const [startDateTime, setStartDateTime] = useState('');
    const [startDateTimeChange, setStartDateTimeChange] = useState(false);
    const startDateTimeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartDateTime(e.target.value);
        setStartDateTimeChange(true);
    };

    const [endDateTime, setEndDateTime] = useState('');
    const [endDateTimeChange, setEndDateTimeChange] = useState(false);
    const endDateTimeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEndDateTime(e.target.value);
        setEndDateTimeChange(true);
    };

    const [eventPic, setEventPic] = useState<File | undefined>();
    const eventPicHandler = (e: ChangeEvent<HTMLInputElement>) =>
        void setEventPic(e.target.files?.[0]);

    useEffect(() => {
        API.get(`/event/get/${eventId}`).then((res) => {
            const data = res.data as EventDetail;
            setName(data.name);
            setEditorState(EditorState.createWithContent(stateFromHTML(data.detail)));
            setStartDateTime(data.startDateTime.split('T')[0]);
            setEndDateTime(data.endDateTime.split('T')[0]);
            setLocation(data.location);
        });
    }, []);

    const formHandler = (e: any) => {
        e.preventDefault();

        const data = new FormData();
        if (nameChange) data.append('name', name);
        if (detailChange) data.append('detail', event_contents);
        if (startDateTimeChange) data.append('startDateTime', startDateTime);
        if (endDateTimeChange) data.append('endDateTime', endDateTime);
        if (locationChange) data.append('location', location);
        if (eventPic !== undefined) data.append('eventPic', eventPic);
        API.post(`/event/edit/${eventId}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                Swal.fire('แก้ไขสำเร็จ', 'ข้อมูลของท่านถูกแก้ไขแล้ว', 'success').then(() =>
                    window.location.reload()
                );
            })
            .catch((e) => {
                Swal.fire('เกิดข้อผิดพลาด', 'เกิดข้อผิดพลาด กรุณาลองใหม่', 'error');
            });
    };

    // Event content
    const event_contents = useMemo(() => stateToHTML(editorState.getCurrentContent()), [
        editorState
    ]);

    return (
        <div className='container'>
            <h1>แก้ไขอีเวนท์</h1>
            <div className='card'>
                <div className='form-group'>
                    <label htmlFor='event_name' className='required'>
                        ชื่ออีเวนท์
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='event_name'
                        required
                        value={name}
                        onChange={nameHandler}
                    />
                </div>
                <div className='row'>
                    <div className='col mr-10 form-group'>
                        <label className='required'>ภาพโปสเตอร์</label>
                        <div className='custom-file'>
                            <input type='file' id='event_poster' onChange={eventPicHandler} />
                            <label htmlFor='event_poster' style={{ width: '100%' }}>
                                เลือกไฟล์
                            </label>
                        </div>
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_location' className='required'>
                            สถานที่
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='event_location'
                            required
                            value={location}
                            onChange={locationHandler}
                        />
                    </div>
                    <div className='col mr-10 form-group'>
                        <label htmlFor='event_startDate' className='required'>
                            วันเริ่มต้น
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='event_startDate'
                            required
                            value={startDateTime}
                            onChange={startDateTimeHandler}
                        />
                    </div>
                    <div className='col form-group'>
                        <label htmlFor='event_endDate' className='required'>
                            วันสิ้นสุด
                        </label>
                        <input
                            type='date'
                            className='form-control'
                            id='event_endDate'
                            required
                            value={endDateTime}
                            onChange={endDateTimeHandler}
                        />
                    </div>
                </div>
                <section className='d-flex'>
                    <section>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('BOLD')}>
                            <i className='fas fa-bold'></i>
                        </button>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('ITALIC')}>
                            <i className='fas fa-italic'></i>
                        </button>
                        <button
                            className='btn mr-5'
                            type='button'
                            onClick={() => editorButtonClick('UNDERLINE')}>
                            <i className='fas fa-underline'></i>
                        </button>
                        <button
                            className='btn'
                            type='button'
                            onClick={() => editorButtonClick('CODE')}>
                            <i className='fas fa-code'></i>
                        </button>
                    </section>
                    <section className='ml-auto'>
                        <button className='btn btn-primary' onClick={formHandler}>
                            บันทึก
                        </button>
                    </section>
                </section>
                <div className='card mx-0'>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={editorChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditEvent;
