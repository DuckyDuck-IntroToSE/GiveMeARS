import { Progress } from "@nextui-org/progress";

interface CourseProgressProps {
  value: number;
  color?: "default" | "success",
  size?: "default" | "sm";
};


export const CourseProgress = ({
  value,
  color,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress
        className="h-2"
        value={value}
        color={color}
      />
      <p className="font-medium mt-2 text-sky-700">
        {Math.round(value)}% Complete
      </p>
    </div>
  )
}