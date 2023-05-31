import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  header: {
    "API-KEY": "367bb339-2821-49bb-868c-efaf25db8ec3",
  },
});

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/logout`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const usersAPI = {
  getProfile(userId) {
    // console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(userId);
  },
  // getUsers(currentPage = 1, pageSize = 10, term = "", friend = null) {
  //   return instance
  //     .get(
  //       `users?page=${currentPage}&count=${pageSize}&term=${term}` +
  //         (friend === null ? "" : `$friend=${friend}`)
  //     )
  //     .then((response) => {
  //       return response.data;
  //     });
  // },
  async getUsers(currentPage = 1, pageSize = 10, term = "", friend = null) {
    const response = await instance.get(
      `users?page=${currentPage}&count=${pageSize}&term=${term}` +
        (friend === null ? "" : `$friend=${friend}`)
    );
    // debugger
    return response.data;
  },
  async getFollowingUsers(currentPage = 1, pageSize = 10, term = "") {
    // debugger
    const response = await this.getUsers(currentPage, pageSize, term, true)
    return response
    // return this.getUsers(currentPage, pageSize, term, true);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
};
