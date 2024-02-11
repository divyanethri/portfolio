import { IExperienceType } from "./IExperienceType";
import { IPersonalInfo } from "./IPersonalInfo";
import { IProfile } from "./IProfile";
import { IProfileOverview } from "./IProfileOverview";
import { ISkill } from "./ISkills";

  export interface IPortfolio {
    profile: IProfile;
    personalInfo: IPersonalInfo;
    profileOverview: IProfileOverview;
    skills: ISkill[];
    experienceType: IExperienceType[];
  }
  