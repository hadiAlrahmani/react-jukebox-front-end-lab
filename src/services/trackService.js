const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;


export const getTracks = async () => {
    const res = await fetch(BASE_URL);
    return res.json();
  };
  
  export const addTrack = async (trackData) => {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trackData),
    });
    return res.json();
  };
  
  export const updateTrack = async (id, trackData) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(trackData),
    });
    return res.json();
  };
  
  export const deleteTrack = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    return res.json();
  };

  