
export interface Routine {
  id: string;
  name: string;
  category: RoutineCategory;
  exercises: Exercise[]
}

export type Exercise = {
  id: string;
  name: string;
  duration: number;
  instructions: string;
  videoUrl: string;
  type: ExerciseType;
};

export type RoutineCategory =
  | "Cardiovascular"
  | "Entrenamiento de Fuerza"
  | "Flexibilidad y Movilidad"
  | "Pérdida de Peso"
  | "Entrenamiento Funcional"
  | "Yoga y Meditación"
  | "Deportes Específicos"
  | "Entrenamientos en Casa"
  | "Entrenamiento de Alta Intensidad Intervalada (HIIT)"
  | "Rehabilitación y Recuperación";

export type ExerciseType =
  | "Cardio"
  | "Fuerza"
  | "Flexibilidad"
  | "Pérdida de Peso"
  | "Funcional"
  | "Yoga"
  | "Deportes Específicos"
  | "Entrenamientos en Casa"
  | "HIIT"
  | "Rehabilitación y Recuperación";