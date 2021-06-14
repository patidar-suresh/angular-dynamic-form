export default {
  schemas: {
    product: [
      {
        name: "productname",
        fieldType: "textbox",
        label: "Product Name",
        hint: "Name of the product",
        placeHolder: "Product Name",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "mfgData",
        fieldType: "textbox",
        fieldSubType: "date",
        label: "Date of Manufacturing",
        hint: "Enter date of manufacturing",
        placeHolder: "Mfg Date",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "price",
        fieldType: "textbox",
        fieldSubType: "number",
        label: "Price",
        hint: "Enter MRP",
        placeHolder: "Price",
        defaultValue: "",
        columnSize: 4,
        required: true,
        context: { type: "official" }
      },
      {
        name: "color",
        fieldType: "textbox",
        fieldSubType: "color",
        label: "Color",
        hint: "Color",
        placeHolder: "Color",
        defaultValue: "",
        columnSize: 4,
        required: true,
        context: { type: "official" }
      },
      {
        name: "quantity",
        fieldType: "textbox",
        fieldSubType: "number",
        label: "Quantity",
        hint: "Quantites available",
        placeHolder: "Quentities",
        defaultValue: "",
        columnSize: 4,
        required: true,
        context: { type: "official" }
      },
      {
        name: "description",
        fieldType: "textarea",
        label: "Product Description",
        hint: "Describe the product",
        placeHolder: "Description",
        defaultValue: "",
        columnSize: 12,
        required: true,
        context: { type: "official" }
      }
    ],
    employee: [{
      name: "firstName",
      fieldType: "textbox",
      label: "First Name",
      hint: "Enter as per your official records",
      placeHolder: "First Name",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "middleName",
      fieldType: "textbox",
      label: "Middle Name",
      hint: "Enter as per your official records",
      placeHolder: "Middle Name",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "lastName",
      fieldType: "textbox",
      label: "Last Name",
      hint: "Enter as per your official records",
      placeHolder: "Last Name",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "email",
      fieldType: "textbox",
      fieldSubType: "email",
      label: "Email ",
      hint: "Primary Email Address",
      placeHolder: "email",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "mobile",
      fieldType: "textbox",
      fieldSubType: "tel",
      label: "Mobile ",
      hint: "Primary Contact No",
      placeHolder: "Mobile",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "dob",
      fieldType: "textbox",
      fieldSubType: "date",
      label: "Date of Birth",
      hint: "Enter as per your official records",
      placeHolder: "...",
      defaultValue: "",
      columnSize: 4,
      required: true,
      context: { type: "official" }
    },
    {
      name: "portfolioWebsite",
      fieldType: "textbox",
      fieldSubType: "url",
      label: "Portfolio Link",
      hint: "Enter Url",
      placeHolder: "...",
      defaultValue: "",
      columnSize: 12,
      required: true,
      context: { type: "official" }
    },
    {
      name: "gender",
      fieldType: "radiogroup",
      label: "Gender",
      placeHolder: "Gender",
      defaultValue: "",
      columnSize: 4,
      options: [
        { label: "Male", value: "m" },
        { label: "Female", value: "f" },
        { label: "Other", value: "0" }
      ],
      required: true,
      context: { type: "official" }
    },
    {
      name: "hobbies",
      fieldType: "checkboxgroup",
      label: "Hobbies",
      placeHolder: "Hobbies",
      defaultValue: "",
      columnSize: 4,
      options: [
        { label: "Music", value: "Music" },
        { label: "Dance", value: "Dance" },
        { label: "Travelling", value: "Travelling" },
        { label: "Horse Ridding", value: "HorseRidding" },
        { label: "Car Driving", value: "CarDriving" }
      ],
      required: true,
      context: { type: "official" }
    },
    {
      name: "relocation",
      fieldType: "radiogroup",
      label: "Ready to Relocate",
      defaultValue: "",
      columnSize: 4,
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "Not Sure", value: "notsure" }
      ],
      required: true,
      context: { type: "official" }
    },

    {
      name: "city",
      fieldType: "dropdown",
      label: "Current City",
      hint: "Select the city you are currently living in",
      placeHolder: "City",
      defaultValue: "",
      columnSize: 6,
      options: [
        { label: "Pune", value: "pune" },
        { label: "Mumbai", value: "mumbai" },
        { label: "Bangalore", value: "blr" }
      ],
      required: true,
      context: { stayType: "CurrentLocation" }
    },
    {
      name: "State",
      fieldType: "dropdown",
      label: "Current State",
      hint: "Select the state you are currently living in",
      placeHolder: "State",
      defaultValue: "",
      columnSize: 6,
      options: [
        { label: "Maharashtra", value: "mh" },
        { label: "Karnataka", value: "ka" },
        { label: "Madhya Pradesh", value: "mp" }
      ],
      required: true,
      context: { stayType: "currentState" }
    },
    {
      name: "comment",
      fieldType: "textarea",
      label: "Reference/Comment/Questions",
      hint: "comments",
      placeHolder: "Brief comment",
      defaultValue: "",
      columnSize: 12,
      required: true,
      context: { type: "official" }
    },

    {
      name: "keySkills",
      fieldType: "chiplist",
      label: "Technologies Known",
      placeHolder: "Technology/skill Name",
      defaultValue: "",
      columnSize: 6,
      required: true,
      context: { type: "official" }
    },
    {
      name: "Confidence",
      fieldType: "slider",
      label: "Confidence Level (on a scale of 10)",
      hint: "0 being minimum and 10 being highest",
      defaultValue: "",
      columnSize: 6,
      min: 0,
      max: 10,
      step: 1,
      required: true,
      context: { type: "official" }
    },
    ],
    assessment: [

      {
        name: "name",
        fieldType: "textbox",
        label: "Name",
        hint: "Enter Name",
        placeHolder: "First Name",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "date",
        fieldType: "textbox",
        fieldSubType: "date",
        label: "Date",
        hint: "Enter date of assessment",
        placeHolder: "Date",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "mobile",
        fieldType: "textbox",
        fieldSubType: "tel",
        label: "Mobile",
        hint: "Mobile",
        placeHolder: "Mobile",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "email",
        fieldType: "textbox",
        fieldSubType: "email",
        label: "Email",
        hint: "Email address",
        placeHolder: "Email",
        defaultValue: "",
        columnSize: 6,
        required: true,
        context: { type: "official" }
      },
      {
        name: "address",
        fieldType: "textarea",
        label: "Address",
        hint: "Home Address",
        placeHolder: "Address",
        defaultValue: "",
        columnSize: 12,
        required: true,
        context: { type: "official" }
      },
      {
        name: "skills",
        fieldType: "formgrouparray",
        label: "Skills",
        hint: "",
        columnSize: 12,
        required: true,
        context: { type: "official" },
        fieldArray: [
          {
            name: "skillName",
            fieldType: "chiplist",
            label: "Skills ",
            hint: "Name of the Skills",
            placeHolder: "Skill Name",
            defaultValue: "",
            columnSize: 3,
            required: true,
            context: { type: "official" }
          },
          {
            name: "category",
            fieldType: "dropdown",
            label: "Skill Category",
            hint: "Selecte the best category your skill belongs to",
            placeHolder: "City",
            defaultValue: "",
            columnSize: 3,
            options: [
              { label: "Administrative and General Office Skills", value: "admin" },
              { label: "Communiation Skills", value: "communication" },
              { label: "Technology Skills", value: "technology" },
              { label: "Marketing Skills", value: "programming" },
              { label: "Finance Skills", value: "finance" },
              { label: "Other  Skills", value: "other" }
            ],
            required: true,
            context: { stayType: "CurrentLocation" }
          },
          {
            name: "proficiency",
            fieldType: "slider",
            label: "Proficiency Level",
            hint: "0-3 Poor, 4-6 Average, 6-8 Very Good, 8-10 Excellent",
            placeHolder: "rating",
            defaultValue: "",
            columnSize: 3,
            min: 0,
            max: 10,
            step: 1,
            required: true,
            context: { type: "official" }
          },
          {
            name: "current_working",
            fieldType: "radiogroup",
            label: "Currently Using it?",
            defaultValue: "",
            columnSize: 2,
            options: [
              { label: "Yes", value: "y" },
              { label: "No", value: "n" }
            ],
            required: true,
            context: { type: "official" }
          },
        ]
      }
    ]
  }
}
