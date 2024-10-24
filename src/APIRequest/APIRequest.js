/* eslint-disable no-unused-vars */
import axios from "axios";
import { getToken, setToken, setUserDetails } from "../helper/sessionHelper";

const BaseURL = "https://edu-backend-1.onrender.com/api/v1";
const token = getToken();

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function loginRequest(email, password) {
  let URL = BaseURL + "/login";

  let postBody = { email: email, password: password };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.data.success === true) {
        setToken(res.data["newToken"]);
        setUserDetails(res.data["user"]);
      }
      return true;
    })
    .catch((err) => {
      console.log(err.message);
      return false;
    });
}
export async function slidePostRequest(data) {
  let URL = BaseURL + "/upsertSlider";
  const configFile = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.post(URL, data, configFile);
    return res.data;
  } catch (err) {
    console.error("Error upserting slider:", err.message);
    throw err;
  }
}

export async function slideGetRequest() {
  let URL = BaseURL + "/carousels";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching slides:", err.message);
    throw err;
  }
}

export async function slideDeleteRequest(id) {
  let URL = BaseURL + "/carousels/" + id;

  try {
    const res = await axios.delete(URL, config);
    return res.data;
  } catch (err) {
    console.error("Error deleting slide:", err.message);
    throw err;
  }
}

export async function allGetNotice() {
  let URL = BaseURL + "/notices";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error get all notice:", err.message);
    throw err;
  }
}
export async function allPostNotice(data) {
  let URL = BaseURL + "/notices";

  try {
    const res = await axios.post(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error post notice:", err.message);
    throw err;
  }
}
export async function singlegetNotice(id) {
  let URL = BaseURL + "/notices/" + id;

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error single notice:", err.message);
    throw err;
  }
}
export async function singleUpdateNotice(id, data) {
  let URL = BaseURL + "/notices/" + id;

  try {
    const res = await axios.put(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error update notice:", err.message);
    throw err;
  }
}
export async function singleDeleteNotice(id) {
  let URL = BaseURL + "/notices/" + id;

  try {
    const res = await axios.delete(URL, config);
    return res.data;
  } catch (err) {
    console.error("Error delete notice:", err.message);
    throw err;
  }
}

export async function createStudent(data) {
  let URL = BaseURL + "/students";

  try {
    const res = await axios.post(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error create student:", err.message);
    throw err;
  }
}

export async function allStudents() {
  let URL = BaseURL + "/students";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error get all students:", err.message);
    throw err;
  }
}

export async function updateStudent(id, data) {
  let URL = BaseURL + "/students/" + id;

  try {
    const res = await axios.put(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error update students:", err.message);
    throw err;
  }
}
export async function singleStudent(id) {
  let URL = BaseURL + "/students/" + id;

  try {
    const res = await axios.put(URL);
    return res.data;
  } catch (err) {
    console.error("Error single students:", err.message);
    throw err;
  }
}
export async function deleteStudent(id) {
  let URL = BaseURL + "/students/" + id;

  try {
    const res = await axios.delete(URL, config);
    return res.data;
  } catch (err) {
    console.error("Error delete students:", err.message);
    throw err;
  }
}

export async function createMarks(data) {
  let URL = BaseURL + "/marks";

  try {
    const res = await axios.post(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error create marks:", err.message);
    throw err;
  }
}

export async function allMarks(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  let URL = BaseURL + `/marks?${query}`;

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error get all marks:", err.message);
    throw err;
  }
}

export async function updateMarks(id, data) {
  let URL = BaseURL + "/marks/" + id;

  try {
    const res = await axios.put(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error update marks:", err.message);
    throw err;
  }
}
export async function singleMarks(id) {
  let URL = BaseURL + "/marks/" + id;

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error single marks:", err.message);
    throw err;
  }
}
export async function deleteMarks(id) {
  let URL = BaseURL + "/marks/" + id;

  try {
    const res = await axios.delete(URL, config);
    return res.data;
  } catch (err) {
    console.error("Error delete marks:", err.message);
    throw err;
  }
}

export async function updateMessage(data, id) {
  let URL = BaseURL + "/messege/" + id;

  try {
    const res = await axios.put(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error upsert message:", err.message);
    throw err;
  }
}

export async function getMessage() {
  let URL = BaseURL + "/messege";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error get all message:", err.message);
    throw err;
  }
}

export async function createInbox(data) {
  let URL = BaseURL + "/inbox";

  try {
    const res = await axios.post(URL, data, config);
    return res.data;
  } catch (err) {
    console.error("Error create inbox:", err.message);
    throw err;
  }
}
export async function allInbox() {
  let URL = BaseURL + "/inbox";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error all inbox:", err.message);
    throw err;
  }
}

export async function singleInbox(id) {
  let URL = BaseURL + "/inbox/" + id;

  try {
    const res = await axios.post(URL);
    return res.data;
  } catch (err) {
    console.error("Error single inbox:", err.message);
    throw err;
  }
}
export async function deleteInbox(id) {
  let URL = BaseURL + "/inbox/" + id;

  try {
    const res = await axios.delete(URL, config);
    return res.data;
  } catch (err) {
    console.error("Error delete inbox:", err.message);
    throw err;
  }
}
export async function seenInbox(id) {
  let URL = BaseURL + "/inboxseen/" + id;

  try {
    const res = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Error seen inbox:", err.message);
    throw err;
  }
}
export async function unseenInbox() {
  let URL = BaseURL + "/inbox/unseencount";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error unseen inbox:", err.message);
    throw err;
  }
}

export async function impNoticeRequest(data) {
  let URL = BaseURL + "/impnotice";

  const configFile = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.post(URL, data, configFile);
    return res.data;
  } catch (err) {
    console.error("Error imp notice:", err.message);
    throw err;
  }
}

export async function getImpNotice() {
  let URL = BaseURL + "/impnotice";

  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error("Error unseen inbox:", err.message);
    throw err;
  }
}
