<?php
/*
 * This file is part of Satushem.
 *
 * Copyright (C) 2019
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses/>.
 */
include('headers.php');
include('connect.php');
$stmt = $db->prepare("SELECT id, name FROM purchase WHERE id = ?");
$stmt->execute(array($_GET['purchase_id']));
if( $row = $stmt->fetch() ) {
	echo json_encode(
		array('meta' => array('code' => 200, 'success' => true, 'message' => 'FETCHED')
			, 'data' => array('comments' => array()))
	);
};
?>
