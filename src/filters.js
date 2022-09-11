import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import { ImFilter } from "react-icons/im";
import { useUpdateFilter } from "./context/FilterProvider";
import { useTasks, useUpdateTasks } from "./context/TasksProvider";
import uncheckAll from "./Functions/unCheckAll";

const Filters = () => {
  const tasks = useTasks();
  const setTasks = useUpdateTasks();
  const updateFilter = useUpdateFilter();

  const icon = (
    <span>
      <ImFilter />
      {" Filters"}
    </span>
  );
  return (
    <div className="d-flex 	">
      <div>
        <InputGroup className="mx-1">
          <DropdownButton
            variant="outline-secondary"
            title={icon}
            id="input-group-dropdown-1"
          >
            <Dropdown.Item
              variant="outline-primary"
              className="mx-1"
              onClick={() => updateFilter("NON_COMPLETE")}
            >
              Show Incomplete
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              variant="outline-primary"
              className="mx-1"
              onClick={() => updateFilter("COMPLETE")}
            >
              Show complete
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              variant="outline-primary"
              className="mx-1"
              onClick={() => updateFilter("ALL")}
            >
              Show All
            </Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </div>
      <div>
        <Button
          variant="outline-warning"
          className="mx-1"
          onClick={() => updateFilter(uncheckAll(tasks, setTasks))}
        >
          Uncheck All
        </Button>
      </div>
    </div>
  );
};

export default Filters;
