import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CreateProgram from "../components/CreateProgram";

export default function Training() {
  const [programs, setPrograms] = useState({
    custom: [],
    premade: [],
  });
  const [createProgram, setCreateProgram] = useState(false);
  useEffect(() => {
    // Check Local Storage, if empty, then request server for custom routines & premade programs
  });
  return (
    <div className="w-full flex flex-col gap-16">
      <div>
        <h1 className="font-bold text-2xl">MY PROGRAMS</h1>
        {programs.custom.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div>
            {programs.custom.map((pr, i) => (
              <div key={i}>{pr.name}</div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h1 className="font-bold text-2xl">PREMADE PROGRAMS</h1>
        {programs.premade.length === 0 ? (
          <p>Empty</p>
        ) : (
          <div>
            {programs.custom.map((pr, i) => (
              <div key={i}>{pr.name}</div>
            ))}
          </div>
        )}
      </div>
      <CreateProgram
        isToggled={createProgram}
        setIsToggled={setCreateProgram}
      />
      <div className="fixed bottom-16 right-4">
        <FontAwesomeIcon
          size="3x"
          icon="fa-solid fa-circle-plus"
          onClick={() => setCreateProgram(true)}
        />
      </div>
    </div>
  );
}