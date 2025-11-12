import {
  BicepsFlexed,
  BookOpenCheck,
  Handshake,
  MapPinCheck,
  ShieldCheck,
  Star,
  Timer,
  UserRound,
} from 'lucide-react';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosHook from '../../Hook/axiosHook/useAxiosHook';
import { Link, useParams } from 'react-router';
import DefaultLoader from '../../components/Loader/DefaultLoader';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../Context/Firebase/FirebaseContext';
import Error from '../../components/Error/Error';
import Feedback from './Feedback';
import WriteAReview from './WriteAReview';
import { Helmet } from 'react-helmet-async';
import RelatedPartners from './RelatedPartners';

const PartnerInfo = () => {
  const [partner, setPartner] = useState(null);
  const [loading, setLoading] = useState(false);
  const { loginUser } = use(AuthContext);
  const axiosInstance = useAxiosHook();
  const partnerId = useParams();
  const [partnerCount, setPartnerCount] = useState(0);
  const [error, setError] = useState();
  const [buttonLoader, setButtonLoader] = useState(false);
  const [reviews, setReviews] = useState([
    {
      name: 'Topon Miya',
      photo: 'https://i.ibb.co.com/YBbP677x/download-30.png',
      rating: 4,
      description:
        'My partner and I set weekly goals and track our progress using this platform. It keeps us accountable and consistent. We even celebrated when we both passed our midterms!',
    },
  ]);

  useEffect(() => {
    setLoading(true);
    const dataFetch = async () => {
      try {
        const res = await axiosInstance.get(`/partner/${partnerId.id}`);
        setPartner(res.data);
        setPartnerCount(res.data.partnerCount);
      } catch (error) {
        if (error.status > 400) {
          setError(error.status);
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  const handelPartnerRequest = async () => {
    const userEmail = loginUser.email;
    const partnerId = partner._id;
    const partnerName = partner.name;
    const partnerImage = partner.profileImage;
    const subject = partner.subject;
    const studyMode = partner.studyMode;
    const myPartner = {
      userEmail,
      partnerId,
      partnerName,
      partnerImage,
      subject,
      studyMode,
    };
    setButtonLoader(true);

    try {
      const res = await axiosInstance.post('/my-partner', myPartner);
      if (res.data.insertedId) {
        toast.success('Send Partner Request Successful 🎉');
        setPartnerCount(partnerCount + 1);
      }
      if (res.data.message) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setButtonLoader(false);
    }
  };

  if (loading) {
    return <DefaultLoader></DefaultLoader>;
  }
  if (error) {
    return <Error></Error>;
  }

  return (
    <div className="max-w-[1440px] mx-auto px-2  mb-24 mt-32">
      {partner && (
        <Helmet>
          <title>
            {`${partner?.subject}`} | {`${partner?.name}`} | Study Mate
          </title>
          <meta
            name="description"
            content="Find your perfect study partner and achieve your goals together!"
          />
          <meta
            name="keywords"
            content="study partner, learning, education, connect"
          />
        </Helmet>
      )}
      <div className="grid grid-cols-3 auto-rows-auto gap-5">
        <div className="col-span-3 lg:col-span-1 lg:row-span-2 order-2 lg:order-1 ">
          <div className=" sticky top-24">
            <div>
              <h1 className="text-center text-2xl font-bold">
                Partner <span className="text-green-600">Details</span>
              </h1>
            </div>
            <div className="mt-5 flex flex-col justify-between items-center w-full ">
              <div className="border border-gray-200 dark:border-gray-700 max-w-[350px] w-full p-4 rounded-2xl space-y-3">
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <UserRound size={20} />
                    User :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm">
                      {partner?.name}
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <BookOpenCheck size={20} />
                    Subject :
                  </div>
                  <div>
                    <h1 className="text-black  dark:text-white font-semibold text-sm">
                      {partner?.subject}
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <ShieldCheck size={20} />
                    Study Mode :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm">
                      <div className=" bg-white/50 dark:bg-base-300 backdrop-blur-lg  flex items-center gap-1 px-1 rounded-full">
                        <div className="bg-green-600 h-2 w-2 rounded-full"></div>
                        <p className="text-xs text-green-600">Active</p>
                      </div>
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <Timer size={20} />
                    Availability :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm">
                      {partner?.availabilityTime}
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <MapPinCheck size={20} />
                    Location :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm">
                      {partner?.location}
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <BicepsFlexed size={20} />
                    Experience Level :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm">
                      {partner?.experienceLevel}
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <Star size={20} />
                    Rating :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm flex items-center gap-1">
                      {partner?.rating}{' '}
                      <Rating
                        readOnly
                        style={{ maxWidth: 80 }}
                        value={partner?.rating}
                      ></Rating>
                    </h1>
                  </div>
                </div>
                <div className="border-b border-gray-200 dark:border-gray-700"></div>
                <div className="text-gray-500/90 flex justify-between items-center">
                  <div className="flex text-sm items-center gap-1">
                    <Handshake size={20} />
                    Partner Count :
                  </div>
                  <div>
                    <h1 className="text-black dark:text-white font-semibold text-sm flex items-center gap-1">
                      {partnerCount}
                    </h1>
                  </div>
                </div>
                <div className="pt-4 flex">
                  <Link
                    onClick={handelPartnerRequest}
                    className="border border-green-600 hover:bg-green-600  text-green-600 hover:text-white  py-3 rounded-xl font-semibold shadow-md transition duration-300 cursor-pointer w-full text-center"
                  >
                    {buttonLoader && (
                      <span className="loading loading-spinner text-primary"></span>
                    )}{' '}
                    Send Partner Request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 order-1 lg:order-2">
          <div className="aspect-video">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src={partner?.profileImage}
              alt=""
            />
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 order-3">
          <div className="mt-5">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">
              <span className="text-green-600 underline decoration-4 underline-offset-4">
                Description
              </span>
            </h2>
            <p className="mt-5 text-gray-500/90">{partner?.bio}</p>
            <p className="mt-5 text-gray-500/90">
              Here, every learner believes in growing together — not just by
              reading books, but by exchanging ideas, helping one another, and
              staying motivated as a team.
              <br />
              <br />
              This platform is built for students and learners who want to find
              their perfect study partner — someone who shares similar goals,
              subjects, and motivation. Whether you’re preparing for exams,
              learning a new skill, or exploring a new subject, you’ll find
              someone here who understands your journey.
              <br />
              <br />
              🤝 Connect. Collaborate. Grow. Together, we can make learning
              easier, faster, and more enjoyable.
              <br />
              <br />
              Because studying alone can be tough — but studying together builds
              confidence, consistency, and success. 🌱 Let’s make education not
              just a task, but a shared adventure towards success. 🚀
            </p>
          </div>
          <div className="mt-24">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">
              <span className="text-green-600 underline decoration-4 underline-offset-4">
                Feedback
              </span>
            </h2>
            <Feedback partnerRating={partner?.rating}></Feedback>
          </div>
          <div className="mt-24">
            <h2 className="text-xl font-extrabold text-gray-900 mb-6">
              <span className="text-green-600 underline decoration-4 underline-offset-4">
                Review
              </span>
            </h2>
            <div className="space-y-5">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-gray-700 bg-base-200 p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-16 w-16 ">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={review.photo}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 className="text-sm">{review.name}</h2>
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={review.rating}
                        readOnly
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-gray-500/90">{review.description}</p>
                </div>
              ))}
            </div>
          </div>

          <WriteAReview
            reviews={reviews}
            setReviews={setReviews}
          ></WriteAReview>
        </div>
      </div>
      <RelatedPartners></RelatedPartners>
    </div>
  );
};

export default PartnerInfo;

// {
//     "_id": "69105e296bc33a31dbeac4b8",
//     "name": "Tumpa dash ",
//     "profileImage": "https://i.ibb.co.com/pv44zNQC/104422.jpg",
//     "subject": "Mathmatic",
//     "studyMode": "Online",
//     "availabilityTime": "Evening 3- 5 pm",
//     "location": "dhaka, gazipur",
//     "experienceLevel": "Expert",
//     "rating": 5,
//     "partnerCount": 0,
//     "email": "oiiemon9@gmail.com",
//     "bio": "Math gets easier when we study together! I enjoy discussing concepts, solving tricky problems, and helping my study partner gain confidence step by step.",
//     "create_at": "2025-11-09T09:26:01.636Z"
// }
