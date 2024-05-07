import React, { useState, useEffect } from "react";
import styled from "styled-components";

const url = "https://68145edbcab20cd3.mokky.dev/todo";


const GetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setTodos(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchTodos();
	}, []);

	const filteredTodos = todos.filter((item) => {
		return item?.text.toLowerCase().includes(input.toLowerCase());
	});

	return (
		<div>
			<Container>
				<Input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search Todos"
				/>
			</Container>
			<div>
				<FlexBox>
					{filteredTodos.map((item) => (
						<TodoItem key={item.id}>
							<StyledName>{item.name}</StyledName>
							<p>{item.price}</p>
							<p>{item.date}</p>
							<StyledName>{item.text}</StyledName>
						</TodoItem>
					))}
				</FlexBox>
			</div>
		</div>
	);
};

export default GetTodos;


	
	const TodoItem = styled.div`
		border: 1px solid #0010f3;
		padding: 1rem;
		margin-bottom: 1rem;
	`;
const FlexBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
`;



const StyledName = styled.p`
color: #00ff77;
	width: 400px;
	border: 1px solid  #0026ff;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  position: relative;
  color: white;
	margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 15px;
  padding-left: 10px;
  position: absolute;
  top: 13px;
  transition: 0.3s;
  pointer-events: none;
`;

const Input = styled.input`
  width: 200px;
  height: 45px;
  border: none;
  outline: none;
  padding: 0px 7px;
  border-radius: 6px;
  color: #fff;
  font-size: 15px;
  background-color: transparent;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
    -1px -1px 6px rgba(255, 255, 255, 0.4);

  &:focus {
    border: 2px solid transparent;
    color: #fff;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
      -1px -1px 6px rgba(255, 255, 255, 0.4),
      inset 3px 3px 10px rgba(0, 0, 0, 1),
      inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }

  &:valid ~ ${Label},
  &:focus ~ ${Label} {
    transition: 0.3s;
    padding-left: 2px;
    transform: translateY(-35px);
  }

  &:valid,
  &:focus {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 1),
      -1px -1px 6px rgba(255, 255, 255, 0.4),
      inset 3px 3px 10px rgba(0, 0, 0, 1),
      inset -1px -1px 6px rgba(255, 255, 255, 0.4);
  }
`;