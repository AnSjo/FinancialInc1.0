import React, { useState } from "react";
import {
  Box,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const earningsData = [
  { name: "Salary", value: 50000 },
  { name: "Investments", value: 15000 },
  { name: "Freelance", value: 10000 },
];

const expensesData = [
  { name: "Rent", value: 20000 },
  { name: "Groceries", value: 8000 },
  { name: "Utilities", value: 4000 },
  { name: "Entertainment", value: 3000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function FinancialDashboard() {
  const [view, setView] = useState("earnings");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = (_, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const data = view === "earnings" ? earningsData : expensesData;
  const total = data.reduce((acc, item) => acc + item.value, 0);

return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        minHeight="100vh"
        bgcolor="#f5f5f5"
        p={isMobile ? 2 : 4}
    >
        <Card
            sx={{
                width: "100%",
                height: isMobile ? "100vh" : "auto",
                maxWidth: isMobile ? "100%" : 500,
                p: isMobile ? 1 : 2,
                mb: isMobile ? 0 : 4,
                borderRadius: isMobile ? 0 : 3,
                boxShadow: isMobile ? 0 : 3,
            }}
        >
            <CardContent>
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    align="center"
                    fontWeight="bold"
                    gutterBottom
                    color="#172b91"
                >
                    Total {view.charAt(0).toUpperCase() + view.slice(1)}: ₹
                    {total.toLocaleString()}
                </Typography>

<br/>
                <Box display="flex" justifyContent="center" mb={2}>
                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleToggle}
                        aria-label="View toggle"
                        sx={{
                            "& .MuiToggleButton-root": {
                                fontSize: isMobile ? "0.8rem" : "1rem",
                                px: isMobile ? 1 : 2,
                                py: 1,
                            },
                        }}
                    >
                        <ToggleButton value="earnings">Earnings</ToggleButton>
                        <ToggleButton value="expenses">Expenses</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Box
                    width="100%"
                    height={isMobile ? "calc(100vh - 200px)" : 400}
                    maxHeight={isMobile ? "calc(100vh - 150px)" : "auto"}
                >
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={isMobile ? 80 : 120}
                                innerRadius={50}
                                label={({ name, percent }) =>
                                    `${name}: ${(percent * 100).toFixed(0)}%`
                                }
                                labelLine={false}
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value) => `₹${value.toLocaleString()}`}
                                wrapperStyle={{ zIndex: 1000 }}
                                position={{ x: 0, y: 0 }}
                                contentStyle={{
                                    maxWidth: "calc(100vw - 20px)",
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            />
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>
            </CardContent>
        </Card>
    </Box>
);
}
