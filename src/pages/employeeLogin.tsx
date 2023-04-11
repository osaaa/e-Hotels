import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function EmployeeLoginPage() {
	const [employeeID, setEmployeeID] = useState("");
	const [validationResult, setValidationResult] = useState("");
	const router = useRouter();

	const handleEmployeeID = (e: ChangeEvent<HTMLInputElement>) => {
		setEmployeeID(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// handle form submission here

		// onSubmit({ startDate, endDate, roomCapacity });
		try {
			const response = await fetch("/api/employeesAccess", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ employeeID: employeeID }),
			});

			const data = await response.json();

			// setValidationResult(
			// 	data.success ? "Valid employee ID" : "Invalid employee ID"
			// );

			if (data.success) {
				// redirect to new page
				router.push("/employeeHomePage");
			} else {
				setValidationResult(data.message);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<div className={styles.container} style={{ marginBottom: "10px" }}>
				<ul className={styles.list}>
					<h1 style={{ borderStyle: "outset" }}>Employee Login</h1>
				</ul>
			</div>

			<form
				onSubmit={handleSubmit}
				style={{
					borderStyle: "outset",
					borderColor: "grey",
					borderWidth: "40px",
				}}
			>
				<div
					style={{
						fontSize: "20px",
						margin: "10px",
					}}
				>
					<div>
						Employee ID:
						<input
							type="text"
							id="employeeID"
							name="employeeID"
							required
							value={employeeID}
							onChange={handleEmployeeID}
						/>
					</div>

					<Link href="./homePage">
						<button
							style={{
								marginTop: "15px",
								marginRight: "50px",
								marginLeft: "10px",
							}}
							type="submit"
						>
							Back
						</button>
					</Link>
					<button type="submit">Submit</button>
				</div>
				{validationResult && (
					<p style={{ fontSize: "15px", color: "red" }}>{validationResult}</p>
				)}
			</form>
		</>
	);
}
