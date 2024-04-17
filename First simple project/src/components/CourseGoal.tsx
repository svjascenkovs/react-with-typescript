// props: {title: string; description: string} vai arī izmantojot destructuring sanāk
// {title, description}: {title: string; description: string}

// import { type FC, type PropsWithChildren, type ReactNode } from "react";
import { type ReactNode } from "react";
import { type CourseGoal } from "../App";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

// Alternatīva
// type CourseGoalProps = PropsWithChildren<{ title: string, ..... }>;

export default function CourseGoal({
  id,
  title,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// Alternatīva izmantojot const funkciju () => {}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
