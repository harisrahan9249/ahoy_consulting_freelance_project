<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ApiController extends Controller
{
    public function getuser($id)
    {
        $users = User::all();

        if (!$users) {
            return response()->json(['error' => 'No users found'], 404);
        }

        return response()->json($users);
    }
}
