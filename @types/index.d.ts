export interface RecentPostsProps {
  title: string;
  image: string;
  date?: string;
  tag?: string;
  color?: "#016766" | "#FA6ED3" | "#670101" | "#02042E" | "#1B8C34" | "#CA511D";
  readTime?: string
  content?: string
}

export interface TagsProps {
  tagName: string | undefined;
  color: string | undefined;
  className?: string
  ballPoint?: string
}

export interface ModalProps {
  children: ReactNode;
  showXIcon?: boolean;
  customCloseIcon?: ReactNode;
  customCloseClass?: string;
  width?: number;
  padding?: number;
  className?: string
  triggerBtn: string | ReactNode
  signupRef?: MutableRefObject<HTMLButtonElement | null>
}

export interface UserProps{
  username?: string;
  email?: string;
  password?: string;
}
export interface UsersProps{
  id?: string;
  email?: string;
  userRole?: string;
  username?: string;
}