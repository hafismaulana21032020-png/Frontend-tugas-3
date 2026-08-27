import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { getTodos } from "@/lib/todos";

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="mx-auto max-w-2xl bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Daftar Tugas (Todo List)
          </h1>
        </header>

        {/* Form Component */}
        <TodoForm />

        {/* List Component */}
        <TodoList todos={todos} />

      </div>
    </main>
  );
}
