const API_BASE_URL = "http://localhost:8000/api/v1";


//user api calls
export const loginUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify(userData),
  });
  const data = await response.json();
  return data.data;
};

export const logoutUser = async () => {
  return await fetch(`${API_BASE_URL}/users/logout`, {
    method: "POST",
    credentials: "include",
  });
};

export const getCurrentUserApi = async () => {
  const response = await fetch(`${API_BASE_URL}/users/current-user`, {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  return data.data;
}; //Api in the name is to differentiate that this function is from api services

export const registerUser = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data.data;
};

export const getUserChannel = async (userName) => {
  const response = await fetch(
    `${API_BASE_URL}/users/get-user-channel/${userName}`,
    { credentials: "include" },
  );
  const data = await response.json();
  return data.data;
};

export const getUserWatchHistory = async() => {
  const response = await fetch(`${API_BASE_URL}/users/get-user-watch-history`, {
    credentials: "include"
  })
  const data = await response.json();
  return data.data;
}


// video api calls
export const getAllVideos = async (query, page, limit) => {
  const response = await fetch(
    `${API_BASE_URL}/video/get-all-videos?query=${query}&page=${page}&limit=${limit}`,
  );
  const data = await response.json();
  return data.data;
};

export const publishVideo = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/video/publish-video`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });
  const data = await response.json();
  return data.data;
};

export const getVideobyId = async (videoId) => {
  const response = await fetch(`${API_BASE_URL}/video/get-video/${videoId}`)
  const data = await response.json();
  return data.data;
}

export const getVideobyUserId = async (owner) => {
  const response = await fetch(`${API_BASE_URL}/video/get-all-videos-user?userId=${owner}`);
  const data = await response.json();
  return data.data;
}

export const updateViewsAndWatchHistory = async (videoId) => {
  console.log(videoId);
  
  const response = await fetch(`${API_BASE_URL}/video/update-view-watchHistory/${videoId}`,{
    credentials:"include"
  });
  const data = await response.json();
  return data.data;
}

// subscription api calls
export const subscribeToChannel = async (channelUserName) => {
  const response = await fetch(`${API_BASE_URL}/subscription/toggle-subscribe/${channelUserName}`, {
    credentials: "include"});
  const data = await response.json();
  return data;
};