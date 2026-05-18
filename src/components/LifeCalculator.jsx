import { useState } from "react";

export const LifePathCalculator = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [result, setResult] = useState("");

    const reduceNumber = (num) => {
        while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
            num = num
                .toString()
                .split("")
                .reduce((acc, digit) => acc + Number(digit), 0);
        }
        return num;
    };

    const calculateLifePath = () => {
        const total =
            reduceNumber(Number(day)) +
            reduceNumber(Number(month)) +
            reduceNumber(Number(year));

        const lifePath = reduceNumber(total);

        setResult(lifePath);
    };

    return (
        <div className="gradient-border p-8 rounded-2xl card-hover">
            <h3 className="text-2xl font-bold mb-6 text-center">
                Life Path Calculator ✨
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input
                    type="number"
                    placeholder="Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="p-3 rounded-lg bg-background border border-primary/20 outline-none"
                />

                <input
                    type="number"
                    placeholder="Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="p-3 rounded-lg bg-background border border-primary/20 outline-none"
                />

                <input
                    type="number"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="p-3 rounded-lg bg-background border border-primary/20 outline-none"
                />
            </div>

            <button
                onClick={calculateLifePath}
                className="cosmic-button w-full"
            >
                Calculate My Number
            </button>

            {result && (
                <div className="mt-6 text-center">
                    <p className="text-lg text-muted-foreground">
                        Your Life Path Number is
                    </p>

                    <h2 className="text-5xl font-bold text-primary mt-2">
                        {result}
                    </h2>
                </div>
            )}
        </div>
    );
};