import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
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
				body: JSON.stringify({ employeeId: employeeID }),
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
			<form onSubmit={handleSubmit}>
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

				<button type="submit">Submit</button>
			</form>
			<Link href="./homePage">
				<button
					style={{ marginRight: "50px", marginLeft: "10px" }}
					type="submit"
				>
					Back
				</button>
			</Link>
			{validationResult && <p>{validationResult}</p>}
		</>
	);
}
