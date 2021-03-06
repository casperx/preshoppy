import { ChangeEvent, useState } from 'react';
import LOLImage from 'assets/prof3.jpg';
import GameImage from 'assets/prof2.jpg';
import ProfImage from 'assets/prof.jpg';
import ReactModal from 'react-modal';
import Swal from 'sweetalert2';
interface OrderItem {
    name: string;
    description: string;
    quantity: number;
    price: number;
}

const ChatLog = [
    { image: GameImage, name: 'Thapanon Sodngam', msg: 'ต้องการสินค้าตัวไหนครับ' },
    { image: ProfImage, name: 'Suthep Chanchuphol', msg: 'เอาหนังสือชื่อ Bitcoin101' },
    { image: GameImage, name: 'Thapanon Sodngam', msg: 'ราคาหนังสือ 117 นะครับ' },
    { image: ProfImage, name: 'Suthep Chanchuphol', msg: 'OK ครับ' },
    { image: GameImage, name: 'Thapanon Sodngam', msg: 'จัดส่งรูปแบบไหนครับ' },
    { image: ProfImage, name: 'Suthep Chanchuphol', msg: 'FlashExpress ครับ' },
    { image: GameImage, name: 'Thapanon Sodngam', msg: 'ค่าจัดส่ง 35 บาทครับ' },
    { image: ProfImage, name: 'Suthep Chanchuphol', msg: 'ครับ' }
];

const Chat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showEventModal = () => {
        resetOrder();
        setIsModalOpen(true);
    };
    const hideEventModal = () => setIsModalOpen(false);

    const resetOrder = () => {
        setCurrentOrder([]);
        setOrderName('');
        setOrderDesc('');
        setOrderQuantity(1);
        setOrderPriceEach(1);
    };
    const [currentOrder, setCurrentOrder] = useState<OrderItem[]>([]);
    const addOrderItem = () => {
        if (!orderName.trim())
            return Swal.fire({
                text: 'กรุณากรอกชื่อสินค้า',
                icon: 'warning',
                customClass: {
                    confirmButton: 'btn btn-primary'
                },
                confirmButtonColor: '#FE604A'
            });
        const currentItem: OrderItem = {
            name: orderName,
            description: orderDesc,
            quantity: orderQuantity,
            price: orderPriceEach
        };

        setCurrentOrder([...currentOrder, currentItem]);

        setOrderName('');
        setOrderDesc('');
        setOrderQuantity(1);
        setOrderPriceEach(1);
    };
    const deleteItem = (index: number) => {
        let temp = [...currentOrder];
        temp.splice(index, 1);
        setCurrentOrder(temp);
    };

    const [orderName, setOrderName] = useState('');
    const [orderQuantity, setOrderQuantity] = useState(1);
    const [orderPriceEach, setOrderPriceEach] = useState(1);
    const [orderDesc, setOrderDesc] = useState('');
    const handlingOrderName = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderName(e.target.value);
    };
    const handlingOrderQuantity = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderQuantity(+e.target.value);
    };
    const handlingOrderPriceEach = (e: ChangeEvent<HTMLInputElement>) => {
        setOrderPriceEach(+e.target.value);
    };
    const handlingOrderDesc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setOrderDesc(e.target.value);
    };

    return (
        <div className='container'>
            <div className='card p-0' style={{ height: '85vh' }}>
                <div className='row align-items-stretch'>
                    <div className='col-3'>
                        <h2 style={{ margin: '0.8rem' }}>แชทล่าสุด</h2>
                        <div className='dropdown show d-block'>
                            <div
                                className='dropdown-menu'
                                style={{
                                    position: 'static',
                                    transform: 'none',
                                    width: '100%',
                                    minWidth: '100%',
                                    boxShadow: 'none',
                                    borderRadius: 0,
                                    borderLeft: 0,
                                    borderRight: 0
                                }}>
                                <a href='#' className='dropdown-item'>
                                    <figure className='avatar mr-10'>
                                        <img src={GameImage} alt='Avatar' />
                                    </figure>
                                    Thapanon Sodngam
                                </a>
                                <a href='#' className='dropdown-item'>
                                    <figure className='avatar mr-10'>
                                        <img src={LOLImage} alt='Avatar' />
                                    </figure>
                                    ขำกร๊าก ขำไปไหน
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='panel' style={{ height: '85vh' }}>
                            <div className='panel-header'>
                                <h2 className='panel-title'>
                                    <figure
                                        className='avatar mr-10'
                                        style={{
                                            position: 'relative',
                                            top: '-4px'
                                        }}>
                                        <img src={GameImage} alt='Avatar' />
                                    </figure>
                                    <span>Thapanon Sodngam</span>
                                </h2>
                            </div>
                            <div className='panel-body'>
                                {ChatLog.map((chat) => (
                                    <div className='tile'>
                                        <div className='tile-icon'>
                                            <figure className='avatar'>
                                                <img src={chat.image} alt='Avatar' />
                                            </figure>
                                        </div>
                                        <div className='tile-content'>
                                            <p className='tile-title text-bold'>{chat.name}</p>
                                            <p className='tile-subtitle'>{chat.msg}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className='tile'>
                                    <div className='tile-icon'>
                                        <figure className='avatar'>
                                            <img src={GameImage} alt='Avatar' />
                                        </figure>
                                    </div>
                                    <div className='tile-content'>
                                        <p className='tile-title text-bold'>Thapanon Sodngam</p>
                                        <p className='tile-subtitle'>
                                            <button
                                                className='btn btn-primary py-5'
                                                style={{ height: 'auto', lineHeight: '1.5' }}>
                                                <div>ยอดชำระทั้งหมด</div>
                                                <h3 className='m-0'>152฿</h3>
                                                <button className='btn btn-sm btn-secondary btn-block'>
                                                    ดูรายละเอียด
                                                </button>
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='panel-footer'>
                                <div className='input-group'>
                                    <input type='text' className='form-control' />
                                    <div className='input-group-append'>
                                        <button
                                            className='btn'
                                            type='button'
                                            onClick={showEventModal}>
                                            <i className='fas fa-notes-medical'></i>
                                        </button>
                                    </div>
                                    <div className='input-group-append'>
                                        <button className='btn btn-primary' type='button'>
                                            <i className='fas fa-paper-plane'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ReactModal
                isOpen={isModalOpen}
                style={{
                    content: {
                        inset: 'unset',
                        width: '80rem',
                        transform: 'translate(50vw, 10vh) translateX(-50%)'
                    }
                }}
                onRequestClose={hideEventModal}
                closeTimeoutMS={500}
                ariaHideApp={false}>
                <div style={{ overflowY: 'scroll', maxHeight: '80vh' }}>
                    <h2 className='mb-0'>สร้างออร์เดอร์ใหม่</h2>
                    <section>
                        <div className='row'>
                            <div className='col'>
                                <div className='form-group'>
                                    <label htmlFor='order-name' className='required'>
                                        ชื่อสินค้า
                                    </label>
                                    <input
                                        type='text'
                                        className='form-control'
                                        id='order-name'
                                        required
                                        value={orderName}
                                        onChange={handlingOrderName}
                                    />
                                </div>
                            </div>
                            <div className='col mr-5 ml-10'>
                                <div className='form-group'>
                                    <label htmlFor='order-quantity' className='required'>
                                        จำนวน
                                    </label>
                                    <input
                                        type='number'
                                        className='form-control'
                                        id='order-quantity'
                                        required
                                        min='1'
                                        value={orderQuantity}
                                        onChange={handlingOrderQuantity}
                                    />
                                </div>
                            </div>
                            <div className='col ml-5 mr-10'>
                                <div className='form-group'>
                                    <label htmlFor='order-price' className='required'>
                                        ราคา (ต่อหน่วย)
                                    </label>
                                    <input
                                        type='number'
                                        className='form-control'
                                        id='order-price'
                                        required
                                        min='1'
                                        value={orderPriceEach}
                                        onChange={handlingOrderPriceEach}
                                    />
                                </div>
                            </div>
                            <div className='col'>
                                <label>&nbsp;</label>
                                <button
                                    className='btn btn-primary btn-block'
                                    type='button'
                                    onClick={addOrderItem}>
                                    เพิ่มสินค้า
                                </button>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='order-desc'>รายละเอียดสินค้า</label>
                            <textarea
                                className='form-control'
                                id='order-desc'
                                value={orderDesc}
                                onChange={handlingOrderDesc}></textarea>
                        </div>
                    </section>
                    <div className='table-responsive'>
                        <table className='table table-outer-bordered'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>รายละเอียด</th>
                                    <th className='text-right'>จำนวน</th>
                                    <th className='text-right'>ราคารวม</th>
                                    <th className='text-right'>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentOrder.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td className='text-right'>{item.quantity}</td>
                                        <td className='text-right'>{item.quantity * item.price}</td>
                                        <td className='text-right'>
                                            <button
                                                className='btn'
                                                onClick={() => deleteItem(index)}>
                                                <i className='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3}>&nbsp;</td>
                                    <td className='text-right'>รวมราคา</td>
                                    <td className='text-right'>
                                        {currentOrder.reduce(
                                            (total, { quantity, price }) =>
                                                total + quantity * price,
                                            0
                                        )}
                                    </td>
                                    <td className='text-right'>&mdash;</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <hr />
                    <div className='text-right'>
                        <button className='btn btn-primary' type='button'>
                            ส่งออร์เดอร์
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
    );
};

export default Chat;
