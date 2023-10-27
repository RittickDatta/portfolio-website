import data, { skillCategory } from "../data/resume-data";
import { useState, useCallback, useMemo } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Paper } from "@mui/material";
import { getSkillPills } from "./About-me";

interface SearchBarProps {
  text: string;
}

// interface FilterBarProps {
//   isFrontend: boolean;
//   isBackend: boolean;
//   isDatabase: boolean;
//   isCollaboration: boolean;
//   isDeploymentAndHosting: boolean;
//   isTesting: boolean;
//   isGraphicDesign: boolean;
//   checkBoxClick?: (category: skillCategory) => void;
// }

const SearchBar = (props: SearchBarProps) => {
  const { text } = props;

  return <></>;
};

// const FilterBar = (
//   isFrontend: boolean,
//   isBackend: boolean,
//   isDatabase: boolean,
//   isCollaboration: boolean,
//   isDeploymentAndHosting: boolean,
//   isTesting: boolean,
//   isGraphicDesign: boolean,
//   onCheckBoxClick: boolean,
//   checkBoxClick: (category: skillCategory) => null,
// ) => {
//   return (
//     <Box>
//       <Paper elevation={2}>
//         <FormGroup>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isFrontend}
//                 onClick={() => checkBoxClick(skillCategory.frontend)}
//               />
//             }
//             label="Frontend"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isBackend}
//                 onClick={() => checkBoxClick(skillCategory.backend)}
//               />
//             }
//             label="Backend"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isDatabase}
//                 onClick={() => checkBoxClick(skillCategory.database)}
//               />
//             }
//             label="Database"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isTesting}
//                 onClick={() => checkBoxClick(skillCategory.testing)}
//               />
//             }
//             label="Testing"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isCollaboration}
//                 onClick={() => checkBoxClick(skillCategory.collaboration)}
//               />
//             }
//             label="Collaboration"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isGraphicDesign}
//                 onClick={() => checkBoxClick(skillCategory.graphicDesign)}
//               />
//             }
//             label="Graphic Design"
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isDeploymentAndHosting}
//                 onClick={() =>
//                   checkBoxClick(skillCategory.deploymentAndHosting)
//                 }
//               />
//             }
//             label="Deployment And Hosting"
//           />
//         </FormGroup>
//       </Paper>
//     </Box>
//   );
// };

export default function Skills() {
  const { skills } = data;

  const [searchBoxText, setSearchBoxtext] = useState<string>("");

  // var handleCheckBoxClick = (category: skillCategory) => {
  //   switch (category) {
  //     case skillCategory.frontend: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isFrontend: !filterCheckBoxes.isFrontend,
  //       });
  //       return;
  //     }
  //     case skillCategory.backend: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isBackend: !filterCheckBoxes.isBackend,
  //       });
  //       return;
  //     }
  //     case skillCategory.database: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isDatabase: !filterCheckBoxes.isDatabase,
  //       });
  //       return;
  //     }
  //     case skillCategory.testing: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isCollaboration: !filterCheckBoxes.isCollaboration,
  //       });
  //       return;
  //     }
  //     case skillCategory.collaboration: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isDeploymentAndHosting: !filterCheckBoxes.isDeploymentAndHosting,
  //       });
  //       return;
  //     }
  //     case skillCategory.graphicDesign: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isTesting: !filterCheckBoxes.isTesting,
  //       });
  //       return;
  //     }
  //     case skillCategory.deploymentAndHosting: {
  //       setFilterCheckboxes({
  //         ...filterCheckBoxes,
  //         isGraphicDesign: !filterCheckBoxes.isGraphicDesign,
  //       });
  //       return;
  //     }
  //     default:
  //       return;
  //   }
  // };

  // const [filterCheckBoxes, setFilterCheckboxes] = useState<FilterBarProps>({
  //   isFrontend: false,
  //   isBackend: false,
  //   isDatabase: false,
  //   isCollaboration: false,
  //   isDeploymentAndHosting: false,
  //   isTesting: false,
  //   isGraphicDesign: false,
  //   checkBoxClick: (category: skillCategory) => handleCheckBoxClick(category),
  // });
  const [skillData, setSkillData] = useState(skills);

  return (
    <>
      <Box>
        <Paper>
          <SearchBar text={searchBoxText} />
        </Paper>
        {/* <Paper>
          <FilterBar
            // isFrontend={filterCheckBoxes.isFrontend}
            // isBackend={filterCheckBoxes.isBackend}
            // isDatabase={filterCheckBoxes.isDatabase}
            // isCollaboration={filterCheckBoxes.isCollaboration}
            // isDeploymentAndHosting={filterCheckBoxes.isDeploymentAndHosting}
            // isTesting={filterCheckBoxes.isTesting}
            // isGraphicDesign={filterCheckBoxes.isGraphicDesign}
            // onCheckBoxClick={handleCheckBoxClick}
            {...filterCheckBoxes}
          />
        </Paper> */}
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          {getSkillPills(true)}
        </Paper>
      </Box>
    </>
  );
}
