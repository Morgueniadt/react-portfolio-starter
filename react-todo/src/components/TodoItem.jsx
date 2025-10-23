import { ListGroupItem, Badge, Button } from "react-bootstrap";

export default function Todoitem({ todo, onToggle, onDelete }) {
  return (
    <ListGroupItem className="d-flex align-items-center justify-content-between" >
      <div style={{ cursor: 'pointer' }} onClick={onToggle}>
        {todo.done ? (
          <>
            <span className="done">{todo.text}</span>
            <span className="float-end ms-2">&#128077;</span>
          </>
        ) : (
          <>
            {todo.text}
            <Badge pill bg="success" className="float-end ms-2">&#10003;</Badge>
          </>
        )}
      </div>

      <Button
        variant="danger"
        size="sm"
        onClick={onDelete}
      >
        &times;
      </Button>
    </ListGroupItem>
  );
}
