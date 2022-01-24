<<<<<<< HEAD
=======
export interface PostItemProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
export interface PostDetail {
  slug: string;
  image: string;
  date: string;
  title: string;
  content: string;
}

export interface MarkDownData {
<<<<<<< HEAD
  title: string;
  excerpt: string;
  date: string;
  image: string;
  isFeatured: boolean;
  slug: string;
  content: string;
=======
  title?: string;
  excerpt?: string;
  date?: string;
  image?: string;
  isFeatured?: boolean;
  content?: string;
  slug?: string;
>>>>>>> 64a01f9a36f0119d348b2a3e0afdbdbd66fb09b5
}

export interface FormData {
  email: string;
  name: string;
  message: string;
  id?: string;
}

export interface NotificationProps {
  title: string;
  message: string;
  status: string;
}
