import styled from "styled-components";

//sita perrasyt i css
export const CreateAttendeeStyled = styled.div`
  width: 60%;
  margin: 10px auto;
  align-items: center;
  border-radius: 25px;
  border: 0;
}
`;

export const MainTitle = styled.h2`
  font-family: "Work Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
  width: 50%;
  padding: 25px;
  border-radius: 25px;
  margin: 50px auto;
  text-align: center;
  font-size: 50px;
  color: #1f2667;
`;

//sita perrasyt i css
export const MainForm = styled.div``;

export const FormTitle = styled.h2`
  font-family: "Work Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
  margin: 50px 0;
  font-size: 40px;
  text-align: center;
  color: #1f2667;
`;

export const ButtonSubmit = styled.button`
  background: linear-gradient(
    90deg,
    rgba(255, 168, 129, 1) 35%,
    rgba(249, 87, 125, 1) 100%
  );
  color: #fff;
  border: 0;
`;

export const ButtonEdit = styled.button`
  background: linear-gradient(
    90deg,
    rgba(62, 213, 253, 1) 35%,
    rgba(16, 131, 248, 1) 100%
  );
  color: #fff;
  border: 0;
`;

export const ButtonDelete = styled.button`
  background: linear-gradient(
    90deg,
    rgba(232, 128, 146, 1) 35%,
    rgba(254, 42, 80, 1) 100%
  );
  color: #fff;
  border: 0;
  margin-left: 10px;
`;

//sita perrasyt i css
export const AttendeeListStyled = styled.div`
  background-color: #fff;
  margin: 0 auto;
  min-height: 50vh;
  width: 60%;
  border-radius: 25px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
`;

//sita perrasyt i css
export const Attendee = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const AttendeeName = styled.div`
  display: flex;
  gap: 0.5rem;
  min-width: 250px;
`;

export const AttendeeInfo = styled.div`
  display: flex;
  gap: 1rem;
  min-width: 300px;
`;

export const MinutesAgoStyled = styled.div`
  display: flex;
  flex-basis: 33%;
  margin-left: 12px;
  flex-direction: row;
  font-size: 12px;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(87, 238, 218, 1) 35%,
    rgba(8, 199, 251, 1) 100%
  );
  color: #fff;
`;

//sita perrasyt i css
export const EditModalContent = styled.div`
width: 300px`;

//sita perrasyt i css
export const NoAttendeeStyled = styled.div`
  font-family: "Work Sans", "Helvetica Neue", "Helvetica", Helvetica, Arial,
    sans-serif;
  color: #1f2667;
  background-color: #fff;
  height: 50vh;
  width: 60%;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  margin: 0 auto;
`;
