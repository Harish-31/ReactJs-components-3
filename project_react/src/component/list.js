import React from "react";
import './list.css';

export default function List(){
    return(
        <div className="lis"> 
        <h1>List of Teams and their Owners</h1>
        <ol type="1">
        <li> History</li>
        <ol type="i">
            <li> Background</li>
            <li> Foundation</li>
            <li> Expansion and termination</li>
        </ol> 
        <li>Administration</li>
        <li>Organization</li>
        <ol type="i">
            <li>Tournament format</li>
            <li>Player acquisition,squad composition and salaries</li>
            <li>Match rules</li>
            <li>Prize money</li>
        </ol>
        <li>Teams</li>
        <ol type="i">
            <li>Current teams</li>
            <li>Defunct teams</li>
            <li>Timeline</li>
        </ol>
        <li>Tiurnament seasons and results</li>
        <ol type="i">
            <li>Performance in the IPL by title</li>
            <li>IPL season results</li>
        </ol>
        <li>Teams Performance</li>
        <ol type="i">
            <li>League stage positions</li>
        </ol>
        <li>Awards</li>
        <ol type="i">
            <li>Orange cap</li>
            <li>Purple cap</li>
            <li>Most valuable player</li>
            <li>Family Awards</li>
            <li>Emerging player award</li>
            <li>Most Score Awards</li>
        </ol>
        <li>Financials</li>
        <ol type="i">
            <li>Title Sponsorship</li>
            <li>Payments to foreign national boards</li>
            <li>Brand Value</li>
        </ol>
        <li>Broadcasting</li>
        <ol type="i">
            <li>Sony and WSG (2008-2017)</li>
            <li>Star India(2018-2022)</li>
            <li>International broadcasters</li>
        </ol>
        <li>Controversy</li>
        <ol type="i">
            <li>2012 and 2013 IPL spot facing and betting match</li>
            <li>Sponsership</li>
        </ol>
        <li>See also</li>
        <li>References</li>
        <li>External links</li>
         </ol>
        </div>
    );
}