import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Bills from "./Bills";

export const Users = () => {
  // Replace with backend call
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-2 ml-2 mr-2 border rounded border-slate-200"
        ></input>
      </div>
      <div className="">
        {users.slice(0, 5).map((user) => (
          <User user={user} />
        ))}
      </div>
      <div className="m-3 text-2xl font-semibold">Bills & Recharges</div>
      <div className="grid grid-cols-6">
        <div>
          <Bills
            link={
              "http://pctechmag.com/wp-content/uploads/2012/09/airtel-logo.jpg"
            }
            name={"Airtel"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://images.fonearena.com/blog/wp-content/uploads/2016/02/Reliance-Jio-new-logo.jpg"
            }
            name={"Jio"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/vi-logo200.png"
            }
            name={"Vi"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/07/Google-Play-new-logo.jpeg?ssl=1"
            }
            name={"PlayStore Recharge"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://tse4.mm.bing.net/th?id=OIP.HWaLRrlyzJKGaQsOciW19QHaHa&pid=Api&P=0&h=180"
            }
            name={"Electricity"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://static.vecteezy.com/system/resources/previews/000/357/048/original/vector-credit-card-icon.jpg"
            }
            name={"Credit Cards"}
          />
        </div>
        <div>
          <Bills
            link={
              "https://tse1.mm.bing.net/th?id=OIP.wJmcsWRXn4mTWOQG2wjXBAHaHa&pid=Api&P=0&h=180"
            }
            name={"DTH/Cable TV"}
          />
        </div>
      </div>
      <div className="m-3 text-2xl font-semibold">Offers & rewards</div>
      <div className="grid grid-cols-6">
            <div>
                <Bills link={"http://www.pngmart.com/files/7/Rewards-PNG-Free-Download.png"} name={"Rewards"}/>
            </div>
            <div>
                <Bills link={"https://thumbs.dreamstime.com/b/offer-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-website-design-development-app-development-150206616.jpg"} name={"Offers"}/>
            </div>
      </div>

    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  const firstletter = user.firstName[0];

  return (
    <div className="flex h-[20%] justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 ml-2 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {firstletter}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
