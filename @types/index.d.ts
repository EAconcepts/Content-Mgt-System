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
}