import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {



  const [searchInputText , setSearchInputText] = useState('');
  const [avatarAddress , setAvatarAddress] = useState('');
  const [followers , setFollowers] = useState(0);
  const [loginName , setLoginName] = useState('');
  const [name , setName] = useState('');
  const [repo , setRepo] = useState(0);
  const [following , setFollowing] = useState(0);
  const [isHirable , setIsHirable] = useState(false);
  const [bio , setBio] = useState('');
  const [display , setDisplay] = useState("none");
  

  useEffect(()=>{
    try {
      fetch(`https://api.github.com/users/${searchInputText}`).then((response)=>{
        return response.json();
      }).then((response)=>{
        setAvatarAddress(response.avatar_url);
        setFollowers(response.followers);
        setLoginName(response.login);
        setName(response.name);
        setRepo(response.public_repos);
        setIsHirable(response.hireable);
        setFollowing(response.following);
        setBio(response.bio);
      });
    } catch (error) {
      
    }
  },[searchInputText])
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-[#0D1117]'>
        <div className='p-2 rounded-sm flex justify-center items-center bg-white flex-col gap-3'>
            <input type="text" placeholder='Search User...'  onChange={(e)=>{
              setSearchInputText(e.target.value);
            }} className='p-2 border-2'/>
            <div>
              <img src={avatarAddress} alt="userImg" className='rounded-sm w-[400px]'/>
            </div>
            <div className='w-full'>
              <button className='bg-black text-white w-full py-3' onClick={()=>{
                setDisplay("flex");
              }}>Next</button>
            </div>



        </div>
      
      </div>
    </>
  )
}

export default App