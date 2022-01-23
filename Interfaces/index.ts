export interface PostDetail {
  slug: string;
  image: string;
  date: string;
  title: string;
  content: string;
}

export interface MarkDownData {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  isFeatured: boolean;
  slug: string;
  content: string;
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
