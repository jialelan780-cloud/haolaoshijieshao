import data from "./collegeMajorData.json";
export interface CollegeMajor {
  id: string;
  major: string;
  baseMajor: string;
  categories: string[];
  directions: Partial<Record<string, string[]>>;
  notes: string;
  needsReview: boolean;
}
export interface College {
  id: string;
  name: string;
  short: string;
  page: number;
  majors: CollegeMajor[];
}
/** 学校及专业来源：用户提供的三校专业类别PDF；本科方向来自原项目2026招生计划。不是完整招生目录。 */
export const colleges: College[] = data;
export function searchMajors(school: College, query: string) {
  const q = query.replace(/\s/g, "").toLowerCase();
  return school.majors.filter((m) =>
    (m.major + m.baseMajor).toLowerCase().includes(q),
  );
}
