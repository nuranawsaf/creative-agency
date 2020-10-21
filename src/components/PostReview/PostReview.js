import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const PostReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, email, photoURL } = loggedInUser;

    const { register, handleSubmit, errors } = useForm({
        defaultValues: {
            name: name
        }
    });

    const onSubmit = data => {
        // sending user gmail profile image to database as userPhoto
        data.userPhoto = photoURL;

        console.log('gmail data', data);
        // insert review into database
        fetch('https://aqueous-beyond-67976.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review post successfully.')
                }
            })

    }

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>


                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Review</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <form className="customFormStyle" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" className="form-control form-control-lg" maxlength="20" placeholder="Your name" /* value={name} */ />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="company" className="form-control form-control-lg" maxlength="25" placeholder="Company’s name, Designation" />
                        {errors.company && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" className="form-control" cols="30" rows="6" maxlength="100" placeholder="Description(max 100words)"></textarea>
                        {errors.description && <span className="text-danger">This field is required</span>}

                    </div>

                    <button type="submit" className="btn btnSubmit" >Submit</button>

                </form>
            </div>
        </div>

    );
};

export default PostReview;