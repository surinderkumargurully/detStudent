const GURULLY_API =
  import.meta.env.DEV
   ? "/gurully" 
   : import.meta.env.VITE_GURULLY_API;

const BANDS_API =
  import.meta.env.DEV 
  ? import.meta.env.VITE_8BANDS_API 
  : import.meta.env.VITE_GURULLY_API;

export { GURULLY_API, BANDS_API };


