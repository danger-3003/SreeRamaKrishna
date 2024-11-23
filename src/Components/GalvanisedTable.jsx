import React from 'react'

function Table() {
  return (
    <div className='overflow-x-auto'>
        <p className='font-bold text-xl uppercase text-center my-3'>Galvanized</p>
        <table cellSpacing="2" cellPadding="2" width="100%" align="CENTER" style={{borderCollapse:"collapse"}} className="border-[#989898] border p-3 text-center">
            <tbody>
                <tr className="border-[#989898] border">
                    <td  className="border-[#989898] border" valign="TOP" align="CENTER" colSpan="8">
                        <b>Specification
                            IS: (Part -1) 2004 -DIN 2439, DIN 2440, DIN
                            2441<br />( Equivalent BS :
                            1387 : 1985 / EN 10255 : 2004 / EN 10240 :
                            1998 / DIN 2444 )</b>
                    </td>
                </tr>
                <tr  className="border-[#989898] border">
                    <td  className="border-[#989898] border" valign="MIDDLE" colSpan="2" rowSpan="3"><b>NB
                            and Series </b></td>
                    <td  className="border-[#989898] border" rowSpan="2" colSpan="2"><b>Outside Diameter</b>
                    </td>
                    <td  className="border-[#989898] border" rowSpan="2" colSpan="2"><b>Wall Thikness</b>
                    </td>
                    <td  className="border-[#989898] border" colSpan="2"><b>Nominal Weight</b></td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" colSpan="2"><b>Screwed &amp; Socketed </b></td>
                </tr>
                <tr className="border-[#989898] border">
                    <td className="border-[#989898] border">MM</td>
                    <td className="border-[#989898] border">MM</td>
                    <td className="border-[#989898] border">MM</td>
                    <td className="border-[#989898] border">SWG</td>
                    <td className="border-[#989898] border">Kg/M</td>
                    <td className="border-[#989898] border">Meters /Tonne</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">15 </td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">21.0<br />21.0<br />21.0</td>
                    <td className="border-[#989898] border">21.4<br />21.8<br />21.8</td>
                    <td className="border-[#989898] border">2.0<br />2.6<br />3.2</td>
                    <td className="border-[#989898] border">14<br />12<br />10</td>
                    <td className="border-[#989898] border">0.96<br />1.22<br />1.45</td>
                    <td className="border-[#989898] border">1046<br />820<br />690</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">20</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">26.4<br />26.5<br />26.5</td>
                    <td className="border-[#989898] border">26.9<br />27.3<br />27.3</td>
                    <td className="border-[#989898] border">2.3<br />2.6<br />3.2</td>
                    <td className="border-[#989898] border">13<br />12<br />10</td>
                    <td className="border-[#989898] border">1.39<br />1.57<br />1.88</td>
                    <td className="border-[#989898] border">719<br />637<br />532</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">25</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">33.2<br />33.3<br />33.3</td>
                    <td className="border-[#989898] border">33.8<br />34.2<br />34.2</td>
                    <td className="border-[#989898] border">2.6<br />3.2<br />4.0</td>
                    <td className="border-[#989898] border">12<br />10<br />8</td>
                    <td className="border-[#989898] border">2.00<br />2.43<br />2.95</td>
                    <td className="border-[#989898] border">500<br />411.5<br />339</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">32</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">41.9<br />42.0<br />42.0</td>
                    <td className="border-[#989898] border">42.5<br />42.9<br />42.9</td>
                    <td className="border-[#989898] border">2.6<br />3.2<br />4.0</td>
                    <td className="border-[#989898] border">12<br />10<br />8</td>
                    <td className="border-[#989898] border">2.57<br />3.13<br />3.82</td>
                    <td className="border-[#989898] border">389<br />319<br />262</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">40</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">47.8<br />47.8<br />47.9</td>
                    <td className="border-[#989898] border">48.4<br />48.8<br />48.8</td>
                    <td className="border-[#989898] border">2.9<br />3.2<br />4.0</td>
                    <td className="border-[#989898] border">11<br />10<br />8</td>
                    <td className="border-[#989898] border">3.27<br />3.60<br />4.41</td>
                    <td className="border-[#989898] border">306<br />278<br />227</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">50</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">59.6<br />59.7<br />59.7</td>
                    <td className="border-[#989898] border">60.2<br />60.8<br />60.8</td>
                    <td className="border-[#989898] border">2.9<br />3.6<br />4.5</td>
                    <td className="border-[#989898] border">11<br />9<br />7</td>
                    <td className="border-[#989898] border">4.15<br />5.10<br />6.26</td>
                    <td className="border-[#989898] border">241<br />196<br />160</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">65</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">75.2<br />75.3<br />75.3</td>
                    <td className="border-[#989898] border">76.0<br />76.6<br />76.6</td>
                    <td className="border-[#989898] border">3.2<br />3.6<br />4.5</td>
                    <td className="border-[#989898] border">10<br />9<br />7</td>
                    <td className="border-[#989898] border">5.83<br />6.54<br />8.05</td>
                    <td className="border-[#989898] border">171.5<br />153<br />124</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">80</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">87.9<br />88.0<br />88.0</td>
                    <td className="border-[#989898] border">88.7<br />89.5<br />89.5</td>
                    <td className="border-[#989898] border">3.2<br />4.0<br />4.8</td>
                    <td className="border-[#989898] border">10<br />8<br />6</td>
                    <td className="border-[#989898] border">6.89<br />8.53<br />10.10</td>
                    <td className="border-[#989898] border">145<br />117<br />96</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">100</td>
                    <td className="border-[#989898] border" valign="TOP">L<br />M<br />H</td>
                    <td className="border-[#989898] border">113.0<br />113.1<br />113.1</td>
                    <td className="border-[#989898] border">113.9<br />115.0<br />115.0</td>
                    <td className="border-[#989898] border">3.6<br />4.5<br />5.4</td>
                    <td className="border-[#989898] border">9<br />7<br />5</td>
                    <td className="border-[#989898] border">10.00<br />12.50<br />14.80</td>
                    <td className="border-[#989898] border">100<br />80<br />67.5</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">125 </td>
                    <td className="border-[#989898] border" valign="TOP">M<br />H</td>
                    <td className="border-[#989898] border">138.5<br />138.5</td>
                    <td className="border-[#989898] border">140.8<br />140.8</td>
                    <td className="border-[#989898] border">4.8<br />5.4</td>
                    <td className="border-[#989898] border">6<br />5</td>
                    <td className="border-[#989898] border">16.40<br />18.40</td>
                    <td className="border-[#989898] border">61<br />54</td>
                </tr>
                <tr>
                    <td className="border-[#989898] border" valign="MIDDLE">150</td>
                    <td className="border-[#989898] border" valign="TOP"><br />H</td>
                    <td className="border-[#989898] border">163.9<br />163.9</td>
                    <td className="border-[#989898] border">165.5<br />166.5</td>
                    <td className="border-[#989898] border">4.8<br />5.4</td>
                    <td className="border-[#989898] border">6<br />5</td>
                    <td className="border-[#989898] border">19.50<br />21.90</td>
                    <td className="border-[#989898] border">51<br />46</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table;