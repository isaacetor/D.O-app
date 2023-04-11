//types for managing props state for user and agent auth sidebar
export type authPropsData = {
  title: string;
  desc: string;
  backgroundColor: string;
  CardColor: string;
};

//types for managing global buttons
export type GlobalButtonProp = {
  padding: string;
  bg: string;
  col: string;
  text: string;
};

//types for managing user details
export type userData = {
  name: string;
};

//types for the about section in the landing page

export type aBout = {
  logo: any;
  heading: string;
  par: string;
};
