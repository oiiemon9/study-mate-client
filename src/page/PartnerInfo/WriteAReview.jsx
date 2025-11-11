import { Rating } from '@smastrom/react-rating';
import React, { use, useState } from 'react';
import { Link } from 'react-router';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import { toast } from 'react-toastify';

const WriteAReview = ({ reviews, setReviews }) => {
  const { loginUser } = use(AuthContext);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');

  const handelReview = (e) => {
    e.preventDefault();
    setError('');
    if (!rating) {
      setError('Please provide rating');
      return;
    }
    const description = e.target.description.value;
    const name = loginUser.displayName;
    const photo = loginUser.photoURL;
    const reviewInfo = { name, photo, rating, description };
    const newReviews = [reviewInfo, ...reviews];
    setReviews(newReviews);
    toast.success('Your Review Submit Successful');
    e.target.reset();
    setRating(0);
  };

  return (
    <div className=" bg-white dark:bg-base-200 border border-gray-200 dark:border-gray-700 rounded-xl mt-10">
      <div className="p-4 sm:p-7">
        <div className="">
          <h1 className="block  font-bold text-gray-800 dark:text-white">
            Write a review
          </h1>
        </div>

        <div className="mt-5">
          <form onSubmit={handelReview}>
            <div className="grid gap-y-4">
              <div>
                <label className="block text-sm mb-2">Rating</label>
                <div>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2">Description</label>
                <div>
                  <textarea
                    type="text"
                    name="description"
                    className="py-2.5 sm:py-3 px-4 block w-full rounded-lg sm:text-sm outline outline-gray-300 dark:outline-gray-700 focus:outline-green-600 min-h-60"
                    placeholder="Write a description..."
                    required
                  />
                </div>
              </div>
              <div className="mt-2">
                {error && <p className="text-red-600">{error}</p>}
              </div>

              <button
                type="submit"
                className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white  py-3 px-12 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-fit text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteAReview;
