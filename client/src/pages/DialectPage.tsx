import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { SQL } from "@/lib/SQL.ts";
import { PostgreSQL } from "@/lib/PostgreSQL.ts";
import { SQLite } from "@/lib/SQLite.ts";
import { TSQL } from "@/lib/TSQL.ts";
import { SQLGraph } from "@/lib/SQLGraph.ts";

interface Argument {
  name: string;
  description: string;
  example: string;
}

interface Term {
  id: string;
  name: string;
  category: string;
  description: string;
  example: string;
  syntax?: string;
  arguments?: Argument[];
}

const dialectTerms: Record<string, Term[]> = {
  SQL: SQL,
  PostgreSQL: PostgreSQL,
  SQLite: SQLite,
  "T-SQL": TSQL,
};

export default function DialectPage({ title }: { title: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [location] = useLocation();

  // Reset selected term when dialect or category changes
  useEffect(() => {
    setSelectedTerm(null);
  }, [title, location]);

  const searchParams = new URLSearchParams(location.split("?")[1] || "");
  const categoryFilter = searchParams.get("category");

  let currentTerms = dialectTerms[title] || [];
  
  if (title === "SQL-Graph") {
    currentTerms = SQLGraph;
  }
  
  const filteredByCategory = categoryFilter 
    ? currentTerms.filter(t => t.category === categoryFilter)
    : currentTerms;

  const filteredTerms = filteredByCategory.filter(
    (term) =>
      term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const categories = Array.from(new Set(filteredTerms.map((t) => t.category)));

  if (selectedTerm) {
    return (
      <div className="flex h-screen bg-background overflow-hidden">
        <div className="hidden md:block w-72 h-full flex-shrink-0">
          <Sidebar className="h-full" />
        </div>
        <main className="flex-1 h-full overflow-y-auto relative p-6">
          <div className="max-w-3xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setSelectedTerm(null)}
              className="mb-6"
            >
              ← Назад к списку
            </Button>
            <h1 className="text-4xl font-bold mb-2">{selectedTerm.name}</h1>
            <p className="text-primary font-medium mb-8">
              {selectedTerm.category}
            </p>

            <Card className="mb-8 border-primary/20 shadow-sm">
              <CardHeader>
                <CardTitle>Описание и Синтаксис</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-6">
                  {selectedTerm.description}
                </p>
                {selectedTerm.syntax && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Синтаксис
                    </h3>
                    <div className="bg-secondary/50 p-4 rounded-xl font-mono text-sm border border-border">
                      {selectedTerm.syntax}
                    </div>
                  </div>
                )}
                {selectedTerm.arguments &&
                  selectedTerm.arguments.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Аргументы
                      </h3>
                      <div className="space-y-4">
                        {selectedTerm.arguments.map((arg, idx) => (
                          <div
                            key={idx}
                            className="bg-card border rounded-xl p-4 shadow-sm"
                          >
                            <div className="font-mono text-sm font-bold text-primary mb-1">
                              {arg.name}
                            </div>
                            <div className="text-sm text-muted-foreground mb-3">
                              {arg.description}
                            </div>
                            <div className="bg-muted/50 p-3 rounded-lg text-xs font-mono border border-border/50 italic">
                              Пример: {arg.example}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </CardContent>
            </Card>

            <Card className="border-primary/20 shadow-sm">
              <CardHeader>
                <CardTitle>Общий пример использования</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-xl font-mono text-sm whitespace-pre-wrap border border-border">
                  {selectedTerm.example}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <div className="hidden md:block w-72 h-full flex-shrink-0">
        <Sidebar className="h-full" />
      </div>
      <main className="flex-1 h-full overflow-y-auto relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Справочник {title}
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                Подробная документация по функциям и операторам.
              </p>
            </div>
            <div className="w-full md:w-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Поиск по терминам..."
                className="pl-9 w-full md:w-[300px] rounded-xl bg-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryTerms = filteredTerms.filter(
                (t) => t.category === category
              );
              if (categoryTerms.length === 0) return null;
              return (
                <div key={category}>
                  <h2 className="text-xl font-semibold mb-6 text-primary border-b border-primary/20 pb-2">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryTerms.map((term) => (
                      <button
                        key={term.id}
                        onClick={() => setSelectedTerm(term)}
                        className="flex items-center justify-between p-5 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all text-left group"
                      >
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {term.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
