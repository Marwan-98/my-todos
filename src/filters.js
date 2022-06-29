import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImFilter } from "react-icons/im";

const Filters = ({ updateFilter, uncheckAll }) => {
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
          onClick={() => updateFilter(uncheckAll)}
        >
          Uncheck All
        </Button>
      </div>

      {/* 
      <Button
        variant="outline-primary"
        className="mx-1"
        onClick={() => updateFilter("NON_COMPLETE")}
      >
        Show Incomplete
      </Button>
      <Button
        variant="outline-success"
        className="mx-1"
        onClick={() => updateFilter("COMPLETE")}
      >
        Show Complete
      </Button>
      <Button
        variant="outline-dark"
        className="mx-1"
        onClick={() => updateFilter("ALL")}
      >
        Show All
      </Button>
      <Button variant="outline-warning" className="mx-1" onClick={uncheckAll}>
        Uncheck All
      </Button> */}
    </div>
  );
};

export default Filters;
