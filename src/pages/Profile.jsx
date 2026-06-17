import React, { useEffect, useState } from 'react'
import MainProfileOfOwner from '../componets/profilePageComponents/MainProfileOfOwner'
import MainProfileOfUser from '../componets/profilePageComponents/MainProfileOfUser'
import { getUserChannel } from '../services/api';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../componets/Loading';

function Profile() {
  const currentUser = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [isOwner, setIsOwner] = useState(false);
  const [channel, setChannel] = useState({});
  const { userName } = useParams();

  useEffect(() => {
    const fetchUserChannel = async () => {
      try {
        const data = await getUserChannel(userName);        
        setChannel(data);
        if (currentUser?._id?.toString() === data?._id?.toString()) {
          setIsOwner(true)};
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserChannel();
  }, [userName]);

  if(loading){
    return (<Loading />);
  }

  return (
    <>
      {isOwner && (<MainProfileOfOwner channel={channel} />)}
      {!isOwner && (<MainProfileOfUser channel={channel} />)}
    </>
  )
}

export default Profile;