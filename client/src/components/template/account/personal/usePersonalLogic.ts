export const usePersonalDateLogic = (firstName?: string) => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  let name = "";
  let surName = "";
  if (firstName) {
    name = firstName;
    surName = "";
    const data = firstName.split(" ");
    if (data.length > 1) {
      name = data[0];
      surName = data[1];
    }
  }

  return { onSubmit, name, surName };
};
