"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("FETCHED:", json);
        setTodos(json);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col">
        {todos.map((todo) => {
          if (todo.id < 10) {
            return (
              <Link href={`/${todo.id}`} key={todo.id}>
                <span className="text-xl">Post{todo.id}:</span>
                {todo.title}
              </Link>
            );
          }
        })}
        {/* route TodoPage props=(settedTodo) */}
        {/* сделать onClick(setTodo) На Link В реакте */}
      </div>
    </>
  );
}
