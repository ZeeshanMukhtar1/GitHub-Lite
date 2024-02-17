import React from 'react';
import LikeProfile from './LikeProfile';
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from 'react-icons/ri';
import { formatMemberSince } from '../helpers/functions';
import { FaInfo, FaLocationArrow, FaXTwitter } from 'react-icons/fa6';
import { GoEye } from 'react-icons/go';

const ProfileInfo = ({ userProfile }) => {
  const memberSince = formatMemberSince(userProfile?.created_at);
  return (
    <div className="flex flex-col w-full gap-2 lg:w-1/3 lg:sticky md:top-10">
      <div className="p-4 rounded-lg bg-glass">
        <div className="flex items-center gap-4">
          {/*  Avatar */}
          <a href={userProfile?.html_url} target="_blank" rel="noreferrer">
            <img
              src={userProfile?.avatar_url}
              className="w-24 h-24 mb-2 rounded-md"
              alt=""
            />
          </a>
          {/* View on Github btn */}
          <div className="flex flex-col items-center gap-2">
            <LikeProfile userProfile={userProfile} />
            <a
              href={userProfile?.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center w-full gap-2 p-2 text-xs font-medium border border-blue-400 rounded-md cursor-pointer bg-glass"
            >
              <GoEye size={16} />
              View on Github
            </a>
          </div>
        </div>

        {/*  Bio */}
        {userProfile?.bio ? (
          <div className="flex items-center gap-2">
            <FaInfo size={15} />
            <p className="text-sm">{userProfile?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {/* Location */}
        {userProfile?.location ? (
          <div className="flex items-center gap-2">
            <FaLocationArrow />
            {userProfile?.location}
          </div>
        ) : null}

        {/* Twitter  */}
        {userProfile?.twitter_username ? (
          <a
            href={`https://twitter.com/${userProfile.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter />
            {userProfile?.twitter_username}
          </a>
        ) : null}

        {/* Member Since  */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Member since</p>
          <p className="">{memberSince}</p>
        </div>

        {/* Email  */}
        {userProfile?.email && (
          <div className="my-2">
            <p className="text-sm font-bold text-gray-600">Email address</p>
            <p className="">{userProfile.email}</p>
          </div>
        )}

        {/*  Name */}
        {userProfile?.name && (
          <div className="my-2">
            <p className="text-sm font-bold text-gray-600">Full name</p>
            <p className="">{userProfile?.name}</p>
          </div>
        )}

        {/* Username */}
        <div className="my-2">
          <p className="text-sm font-bold text-gray-600">Username</p>
          <p className="">{userProfile?.login}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers  */}
        <div className="flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {userProfile?.followers}</p>
        </div>

        {/* Following  */}
        <div className="flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {userProfile?.following}</p>
        </div>

        {/*  public repos */}
        <div className="flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {userProfile?.public_repos}</p>
        </div>

        {/*  public gists */}
        <div className="flex items-center flex-1 gap-2 p-2 rounded-lg bg-glass min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {userProfile?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
