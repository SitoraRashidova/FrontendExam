export const Profile = () => {
    return (
        <div className="container max-w-[1170px] mx-auto">
            <div className="flex gap-8 max-w-4xl mx-auto mt-10">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 shadow-md rounded-lg">
        <h3 className="font-semibold text-lg mb-4">Manage My Account</h3>
        <ul className="space-y-2">
          <li className="text-red-500 font-semibold">My Profile</li>
          <li className="text-gray-600 hover:text-red-500 cursor-pointer">Address Book</li>
          <li className="text-gray-600 hover:text-red-500 cursor-pointer">My Payment Options</li>
        </ul>
        <h3 className="font-semibold text-lg mt-6 mb-4">My Orders</h3>
        <ul className="space-y-2">
          <li className="text-gray-600 hover:text-red-500 cursor-pointer">My Returns</li>
          <li className="text-gray-600 hover:text-red-500 cursor-pointer">My Cancellations</li>
        </ul>
        <h3 className="font-semibold text-lg mt-6 mb-4">My Wishlist</h3>
      </aside>

      {/* Profile Form */}
      <div className="w-3/4 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-red-500 mb-4">Edit Your Profile</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              value="Md"
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              value="Rimel"
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value="rimel1111@gmail.com"
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              value="Kingston, 5236, United State"
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        {/* Password Change Section */}
        <h3 className="text-lg font-semibold mt-6">Password Changes</h3>
        <div className="grid gap-3 mt-3">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 py-2 border rounded">Cancel</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Save Changes</button>
        </div>
      </div>
    </div>
        </div>
    )
}