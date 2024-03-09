import axios from 'axios'

export const  exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
 params: {limit: '1400'},
  headers: {
    'X-RapidAPI-Key': '52891da449msha25a0a476133c8ap1f20d3jsn0e22716c656a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export async function fetchExerciseData() {
  try {
    const response = await axios.request(exerciseOptions);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {
    id: 'UCE_M8A5yxnLfW0KghEeajjw'
  },
  headers: {
    'X-RapidAPI-Key': '52891da449msha25a0a476133c8ap1f20d3jsn0e22716c656a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export async function fetchYoutubeData() {
  try {
    const response = await axios.request(youtubeOptions);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};





