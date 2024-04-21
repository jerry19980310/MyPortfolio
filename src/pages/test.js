const axios = require('axios');

const accessToken = 'AQU0HsnAY-rq-PVrVuR0s78q0zKTwNkuoxgmFtqQtnAW3SEc8JCBNCXNx2_iUCarblr9dV6GRtI5FDQR0vofF4lxY-3Ydk0eGxQXX7MVTsj8kUTM_XMlymPrgq5SZ_4FApqa83NAR-oOs8xolFbiP4msQvsUAM7VUgtcqF4mlxd6eqOqNzMIMS141AMkg9PSnbtwUJUeuoww9t_wpEIXCoKMV-krxq-IMwNeYJUXG_kjAqsx3jObGyRxUeJeDOTU3zLdzzOMdmIUh7vd4G_ChV3M6UtAc8qCvLSv4OP8c9jWyO-OXwTFYUmhPtciyVO1dJU2Z3Zra36hymzJ-aodK2QPl03YyA'

const getProfile = async (accessToken, profileId) => {
  const LI_PROFILE_API_ENDPOINT = `https://api.linkedin.com/v2/people/${profileId}`;

  try {
    const response = await axios.get(LI_PROFILE_API_ENDPOINT, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-RestLi-Protocol-Version': '2.0.0'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

// Replace 'access-token' with the actual access token and 'profile-id' with the actual profile ID
getProfile(accessToken, '551999303').then((profileData) => {
  if (profileData) {
    console.log('Profile Data:', profileData);
  }
});