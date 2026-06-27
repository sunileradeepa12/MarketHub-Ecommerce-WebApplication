/* style.css - simple, clean UI for Product Manager */

/* Page layout */
:root{
  --max-width: 980px;
  --accent: #2b6cb0;
  --muted: #6b7280;
  --bg: #ffffff;
  --card: #f8fafc;
  --border: #e6edf3;
}

*{box-sizing:border-box}
html,body{
  height:100%;
  margin:0;
  font-family: "Segoe UI", Roboto, Arial, sans-serif;
  background: linear-gradient(180deg,#fbfdff 0%, #ffffff 100%);
  color:#111827;
}

/* container */
.container{
  max-width: var(--max-width);
  margin:28px auto;
  padding:20px;
}

/* headings */
h1{
  font-size:2.25rem;
  margin:0 0 14px 0;
  color:#111827;
  font-weight:700;
}
h2{
  font-size:1.25rem;
  margin:18px 0 8px 0;
  color: #0f172a;
}

/* form card */
.card{
  background:var(--card);
  border:1px solid var(--border);
  padding:18px;
  border-radius:8px;
  box-shadow: 0 1px 2px rgba(15,23,42,0.03);
  margin-bottom:18px;
}

/* form fields */
.form-row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  align-items:center;
  margin-bottom:10px;
}
.form-row label{
  min-width:88px;
  font-weight:600;
  color:var(--muted);
}
.form-row input[type="text"],
.form-row input[type="number"],
.form-row input[type="email"],
.form-row textarea{
  flex:1 1 280px;
  padding:8px 10px;
  border-radius:6px;
  border:1px solid var(--border);
  background:#fff;
  font-size:0.95rem;
  outline:none;
}
.form-row input:focus, .form-row textarea:focus{
  border-color:var(--accent);
  box-shadow:0 0 0 3px rgba(43,108,176,0.07);
}

/* buttons */
.btn{
  display:inline-block;
  padding:8px 12px;
  border-radius:6px;
  border:1px solid transparent;
  cursor:pointer;
  font-weight:600;
  margin-right:8px;
}
.btn-primary{
  background:var(--accent);
  color:#fff;
  border-color:rgba(0,0,0,0.06);
}
.btn-secondary{
  background:#fff;
  color:var(--accent);
  border:1px solid var(--border);
}
.btn-danger{
  background:#ef4444;
  color:#fff;
  border-color:rgba(0,0,0,0.06);
}

/* table */
.table-wrap{ overflow-x:auto; margin-top:12px; }
table{
  width:100%;
  border-collapse:collapse;
  margin-top:6px;
  font-size:0.95rem;
}
th, td{
  padding:8px 10px;
  border:1px solid var(--border);
  text-align:left;
}
th{
  background:#f1f5f9;
  font-weight:700;
}
tr:nth-child(even){ background:#ffffff; }

/* actions links */
.action-links a{
  text-decoration:none;
  font-size:0.9rem;
  margin-right:8px;
}
.action-links a.edit{ color:#0ea5e9; }
.action-links a.delete{ color:#ef4444; }

/* responsive */
@media (max-width:640px){
  .form-row{ flex-direction:column; align-items:stretch; }
  .form-row label{ min-width:unset; }
  h1{ font-size:1.5rem; }
  .btn{ padding:8px 10px; font-size:0.95rem; }
}