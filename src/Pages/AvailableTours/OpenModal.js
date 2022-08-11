import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';


const OpenModal = ({ confirm, setConfirm }) => {
    const { _id, img, cost, location } = confirm;
    const [user, loading] = useAuthState(auth);

    if (loading || !user) {
        return <Loading></Loading>
    }

    const handleBooding = event => {
        event.preventDefault();

        const booking = {
            userId: _id,
            location:location,
            user: user.email,
            userName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                    toast(`Successfully Booking`)
                
                setConfirm(null)
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='w-24 ml-44 mb-4' src={img} alt="" />
                    <h3 className="font-bold text-xl  text-center lg:mb-2">Booking For : <span className='text-secondary'>{location}</span></h3>
                    <h3 className="font-bold text-xl  text-center lg:mb-4">Cost : <span className='text-secondary'>${cost}</span></h3>
                    <form onSubmit={handleBooding}
                        className='grid grid-cols-1 gap-3 justify-items-center mt-6'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Confirm" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OpenModal;