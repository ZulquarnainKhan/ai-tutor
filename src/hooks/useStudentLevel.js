import { useTutorStore } from '../store/useTutorStore';

export const useStudentLevel = () => {
  const { studentLevel, updateLevel } = useTutorStore();
  return { studentLevel, updateLevel };
};
