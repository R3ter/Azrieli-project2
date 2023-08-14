import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default ({
  arr,
}: {
  arr: { label: string; imageUrl: string; id: string }[];
}) => {
  const ref = useRef("");
  const [selected, setSelected] = useState("Select");
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selected}
      </MenuButton>
      <MenuList>
        {arr.map(({ id, imageUrl, label }, index) => (
          <MenuItem
            onClick={() => {
              ref.current = id;
              setSelected(label);
            }}
            minH="48px"
          >
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={imageUrl}
              mr="12px"
            />
            <span>{label}</span>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
