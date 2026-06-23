import { useState, useEffect } from 'react';
import { Booking, PricingPackage } from '../types';
import { Settings, Users, Mail, DollarSign, Check, X, ShieldAlert, FileText, ArrowRight, Save, PlusCircle, Trash, ExternalLink } from 'lucide-react';

interface AdminPanelProps {
  bookings: Booking[];
  packages: PricingPackage[];
  onPricingUpdated: (updated: PricingPackage[]) => void;
  onBookingStatusUpdated: (bookingId: string, newStatus: 'Pending' | 'Confirmed' | 'Declined') => void;
}

export default function AdminPanel({
  bookings,
  packages,
  onPricingUpdated,
  onBookingStatusUpdated
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<'bookings' | 'pricing' | 'emails'>('bookings');
  
  // Local mutable state for editing pricing
  const [editingPackages, setEditingPackages] = useState<PricingPackage[]>([]);
  const [emails, setEmailLogs] = useState<any[]>([]);
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isSavingPricing, setIsSavingPricing] = useState(false);
  const [statusError, setStatusError] = useState<string | null>(null);

  // Sync pricing state of server locally
  useEffect(() => {
    if (packages && packages.length > 0) {
      setEditingPackages(JSON.parse(JSON.stringify(packages))); // deep copy
    }
  }, [packages]);

  // Fetch Simulated Email Logs in-interval or on mounting
  useEffect(() => {
    fetchEmailLogs();
  }, [activeTab, bookings]); // Refetch when switching to email tab or when bookings shift

  const fetchEmailLogs = async () => {
    try {
      const res = await fetch('/api/emails');
      if (res.ok) {
        const data = await res.json();
        // Sort descending by sentAt
        data.sort((a: any, b: any) => new Date(b.sentAt).getTime() - new Date(a.sentAt).getTime());
        setEmailLogs(data);
      }
    } catch (err) {
      console.error("Failed to load email logs", err);
    }
  };

  // Mutate local pricing variables
  const handlePriceChange = (pkgIdx: number, value: number) => {
    const nextPr = [...editingPackages];
    nextPr[pkgIdx].price = isNaN(value) ? 0 : value;
    setEditingPackages(nextPr);
  };

  const handleDescChange = (pkgIdx: number, text: string) => {
    const nextPr = [...editingPackages];
    nextPr[pkgIdx].description = text;
    setEditingPackages(nextPr);
  };

  const handleFeatureChange = (pkgIdx: number, featIdx: number, text: string) => {
    const nextPr = [...editingPackages];
    nextPr[pkgIdx].features[featIdx] = text;
    setEditingPackages(nextPr);
  };

  const handleAddFeature = (pkgIdx: number) => {
    const nextPr = [...editingPackages];
    nextPr[pkgIdx].features.push("New custom benefit inclusion");
    setEditingPackages(nextPr);
  };

  const handleDeleteFeature = (pkgIdx: number, featIdx: number) => {
    const nextPr = [...editingPackages];
    nextPr[pkgIdx].features.splice(featIdx, 1);
    setEditingPackages(nextPr);
  };

  // Submit revised pricing to server
  const handleSavePrices = async () => {
    setIsSavingPricing(true);
    setSaveStatus('');
    try {
      const res = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPackages)
      });

      if (!res.ok) throw new Error("Failed to post update pricing packages");

      const body = await res.json();
      onPricingUpdated(body.pricing);
      setSaveStatus('SUCCESS');
      setTimeout(() => setSaveStatus(''), 4000);
    } catch (err: any) {
      setSaveStatus('ERROR: ' + err.message);
      setTimeout(() => setSaveStatus(''), 6000);
    } finally {
      setIsSavingPricing(false);
    }
  };

  // Trigger booking state change (POST request)
  const handleStatusChangeSubmit = async (bookingId: string, value: 'Pending' | 'Confirmed' | 'Declined') => {
    setStatusError(null);
    try {
      const res = await fetch(`/api/bookings/${bookingId}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: value })
      });

      if (!res.ok) throw new Error("Failed to post booking status update");

      onBookingStatusUpdated(bookingId, value);
    } catch (err: any) {
      setStatusError("Inquiry status change failed: " + err.message);
    }
  };

  return (
    <section id="admin-hub" className="py-24 bg-deep-brown text-beige font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Administrative Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-6 border-b border-white/10">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 bg-gold/10 border border-gold/30 px-3 py-1 rounded-full">
              <Settings className="h-4 w-4 text-gold animate-[spin_10s_linear_infinite]" />
              <span className="text-[10px] font-mono tracking-widest text-[#d4af37] font-semibold uppercase">MehSang Operations CRM Suite</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-white tracking-wide">
              Studio Admin Panel
            </h2>
          </div>

          {/* Tab Selection keys */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-widest flex items-center space-x-1.5 transition-colors ${
                activeTab === 'bookings'
                  ? 'bg-gold text-deep-brown font-bold rounded-full shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-white rounded-full'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Bookings ({bookings.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-widest flex items-center space-x-1.5 transition-colors ${
                activeTab === 'pricing'
                  ? 'bg-gold text-deep-brown font-bold rounded-full shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-white rounded-full'
              }`}
            >
              <DollarSign className="h-4 w-4" />
              <span>Editable Tariff List</span>
            </button>
            <button
              onClick={() => setActiveTab('emails')}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-widest flex items-center space-x-1.5 transition-colors ${
                activeTab === 'emails'
                  ? 'bg-gold text-deep-brown font-bold rounded-full shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-white rounded-full'
              }`}
            >
              <Mail className="h-4 w-4" />
              <span>Simulated Outbox ({emails.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: BOOKING CRM */}
        {activeTab === 'bookings' && (
          <div className="space-y-6 animate-fade-in text-white">
            <div className="flex justify-between items-center bg-white/5 px-6 py-4 rounded-[24px] border border-white/10">
              <p className="text-xs font-mono text-gold/80 italic">
                * Real-time customer registry. Inquiries registered via the client booking form automatically append here immediately.
              </p>
              <button onClick={() => fetchEmailLogs()} className="text-[10px] font-mono text-gold hover:underline">
                Refresh list
              </button>
            </div>

            {statusError && (
              <div className="p-3 bg-rose-500/20 border border-rose-500/30 text-rose-300 rounded-[20px] text-xs font-mono font-medium animate-pulse flex justify-between items-center px-5">
                <span>✗ {statusError}</span>
                <button onClick={() => setStatusError(null)} className="hover:text-white underline text-[10px]">Dismiss</button>
              </div>
            )}

            {bookings.length === 0 ? (
              <div className="text-center py-20 bg-white/5 rounded-[24px] border border-dashed border-white/10 text-beige/50">
                <ShieldAlert className="h-10 w-10 text-gold mx-auto mb-3" />
                <p className="text-xs font-mono italic text-beige/50">No booking inquiries registered yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-[32px] border border-white/10">
                <table className="w-full text-left text-xs text-beige/90 min-w-[900px]">
                  <thead className="bg-white/5 uppercase text-[10px] font-mono text-gold border-b border-white/10">
                    <tr>
                      <th className="px-6 py-4">ID / Created</th>
                      <th className="px-6 py-4">Client Contact Details</th>
                      <th className="px-6 py-4">Event Date / Plan</th>
                      <th className="px-6 py-4">Venue Address</th>
                      <th className="px-6 py-4">Client personal Notes</th>
                      <th className="px-6 py-4">Status Class</th>
                      <th className="px-6 py-4 text-right">CRM Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {bookings.slice().reverse().map((b) => (
                      <tr key={b.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-mono space-y-1">
                          <span className="text-[9px] bg-white/10 text-gold font-bold px-2 py-0.5 rounded-full block w-max">{b.id}</span>
                          <span className="text-[10px] text-beige/40 block">{new Date(b.createdAt).toLocaleDateString()}</span>
                        </td>
                        <td className="px-6 py-4 space-y-1">
                          <p className="font-semibold text-white">{b.name}</p>
                          <p className="text-[10px] text-beige/60 font-mono">{b.phone}</p>
                          <p className="text-[10px] text-gold/75 font-mono truncate max-w-xs">{b.email}</p>
                        </td>
                        <td className="px-6 py-4 space-y-1 font-mono">
                          <p className="text-white font-semibold">{b.eventDate}</p>
                          <span className="text-[9px] uppercase tracking-wider text-white font-bold bg-mehndi-green px-2.5 py-0.5 rounded-full inline-block">
                            {b.eventType}
                          </span>
                        </td>
                        <td className="px-6 py-4 truncate max-w-[150px] font-light" title={b.location}>
                          {b.location}
                        </td>
                        <td className="px-6 py-4 max-w-[200px] truncate font-light italic" title={b.message}>
                          "{b.message}"
                        </td>
                        <td className="px-6 py-4 font-mono">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${
                            b.status === 'Confirmed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            b.status === 'Declined' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                            'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right space-x-1.5 font-mono">
                          {b.status !== 'Confirmed' && (
                            <button
                              id={`approve-btn-${b.id}`}
                              onClick={() => handleStatusChangeSubmit(b.id, 'Confirmed')}
                              className="px-3 py-1 rounded-full bg-green-600 hover:bg-green-500 text-[10px] font-bold text-white transition-colors"
                              title="Approve Booking"
                            >
                              Approve
                            </button>
                          )}
                          {b.status !== 'Declined' && (
                            <button
                              id={`decline-btn-${b.id}`}
                              onClick={() => handleStatusChangeSubmit(b.id, 'Declined')}
                              className="px-3 py-1 rounded-full bg-red-600 hover:bg-red-500 text-[10px] font-bold text-white transition-colors"
                              title="Decline Booking"
                            >
                              Decline
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PRICING CONFIGURATION */}
        {activeTab === 'pricing' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/5 py-4 px-6 rounded-[24px] border border-white/10 gap-4">
              <div>
                <p className="text-xs font-mono text-gold/80 italic font-medium">
                  EDIT MODE ON: Modify tariff values and inclusion indices below.
                </p>
                <p className="text-[10px] text-beige/50 font-light mt-0.5">
                  Click 'Save Pricing' at the bottom to write changes permanently to server configurations.
                </p>
              </div>

              {saveStatus === 'SUCCESS' && (
                <div className="text-[10px] font-mono font-bold bg-green-500/20 border border-green-500 px-3 py-1.5 rounded-full text-green-300 animate-pulse">
                  ✓ PRICING PERSISTENCE COMPILED AND SYNCED SUCCESSFULLY!
                </div>
              )}

              {saveStatus.startsWith('ERROR') && (
                <div className="text-[10px] font-mono font-bold bg-rose-500/20 border border-rose-500/50 px-3 py-1.5 rounded-full text-rose-400 animate-pulse">
                  ✗ {saveStatus}
                </div>
              )}
            </div>

            {/* Loop through local mutable packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
              {editingPackages.map((pkg, pIdx) => (
                <div
                  key={pkg.id}
                  className="bg-white/5 rounded-[32px] border border-white/10 p-6 space-y-4 focus-within:border-gold/30 transition-all"
                >
                  
                  {/* Header Title & cost */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pb-3 border-b border-white/10">
                    <div className="sm:col-span-8 space-y-1">
                      <span className="text-[8px] font-mono text-gold/60 uppercase tracking-widest font-semibold block">Plan ID: {pkg.id}</span>
                      <h4 className="font-serif font-bold text-lg text-white">{pkg.name}</h4>
                    </div>
                    {/* Cost Input */}
                    <div className="sm:col-span-4 ps-0 sm:ps-2 space-y-1">
                      <label className="text-[9px] font-mono text-beige/40 uppercase block">Starting (₹)</label>
                      <input
                        type="number"
                        value={pkg.price}
                        onChange={(e) => handlePriceChange(pIdx, parseInt(e.target.value))}
                        className="w-full px-4 py-1.5 bg-deep-brown border border-white/10 text-white rounded-full font-mono font-bold text-sm focus:outline-none focus:border-gold text-right"
                      />
                    </div>
                  </div>

                  {/* Description Input */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-beige/40 uppercase block">Short Synopsis</label>
                    <textarea
                      value={pkg.description}
                      onChange={(e) => handleDescChange(pIdx, e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 bg-deep-brown border border-white/10 text-beige text-xs rounded-2xl font-light focus:outline-none focus:border-gold resize-none"
                    />
                  </div>

                  {/* Editable Features block */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/5 pb-1">
                      <span className="text-[9px] font-mono text-beige/40 uppercase tracking-wider block">Benefits list inclusions:</span>
                      <button
                        onClick={() => handleAddFeature(pIdx)}
                        className="text-[9px] text-gold hover:underline flex items-center space-x-1 font-mono"
                      >
                        <PlusCircle className="h-3 w-3" />
                        <span>Add inclusion line</span>
                      </button>
                    </div>

                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2">
                          <input
                             type="text"
                             value={feat}
                             onChange={(e) => handleFeatureChange(pIdx, fIdx, e.target.value)}
                             className="bg-deep-brown border border-white/10 rounded-full px-3 py-1 text-xs text-white/95 font-light focus:outline-none focus:border-gold flex-1"
                          />
                          <button
                            onClick={() => handleDeleteFeature(pIdx, fIdx)}
                            className="p-1.5 hover:bg-white/5 text-rose-400 hover:text-rose-500 rounded-full transition-colors"
                            title="Remove line"
                          >
                            <Trash className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Submit settings button */}
            <div className="pt-6 border-t border-white/10 text-right">
              <button
                id="save-pricing-btn"
                onClick={handleSavePrices}
                disabled={isSavingPricing}
                className="px-8 py-3.5 bg-gold hover:bg-white text-deep-brown font-mono font-bold uppercase tracking-widest text-xs rounded-full shadow-md transition-colors flex items-center space-x-2 ml-auto active:scale-95 disabled:opacity-50"
              >
                <Save className="h-4.5 w-4.5 mr-1" />
                <span>{isSavingPricing ? 'Saving settings...' : 'Save Pricing Settings'}</span>
              </button>
            </div>

          </div>
        )}

        {/* TAB 3: SIMULATED MAIL OUTBOX */}
        {activeTab === 'emails' && (
          <div className="space-y-6 animate-fade-in text-white">
            <div className="flex justify-between items-center bg-white/5 px-6 py-4 rounded border border-white/10">
              <p className="text-xs font-mono text-gold/80 italic font-medium">
                * Simulated SMTP email outbox logs. Bookings or state shifts dispatches beautiful automated templates.
              </p>
              <button onClick={() => fetchEmailLogs()} className="text-[10px] font-mono text-gold hover:underline">
                Poll Email Server logs
              </button>
            </div>

            {emails.length === 0 ? (
              <div className="text-center py-20 bg-white/5 rounded border border-dashed border-white/10">
                <Mail className="h-10 w-10 text-gold mx-auto mb-3" />
                <p className="text-xs font-mono italic text-beige/50">Simulated email server outbox is empty.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {emails.map((em, idx) => (
                  <div
                    key={em.id || idx}
                    className="bg-white/5 rounded border border-white/10 p-5 space-y-4 hover:border-white/20 transition-all font-mono"
                  >
                    
                    {/* Header: Destination, Stamp, Date */}
                    <div className="flex justify-between items-start gap-4 border-b border-white/5 pb-3">
                      <div className="space-y-1">
                        <span className="text-[8px] uppercase font-bold tracking-widest bg-gold/15 text-gold border border-gold/25 px-1.5 py-0.5 rounded w-max block">
                          {em.type || 'SMTP OUTBOUND'}
                        </span>
                        <div className="text-[10px] text-white">
                          <span className="text-beige/40">TO: </span><span className="font-semibold underline">{em.recipient}</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-beige/40 text-right">
                        {new Date(em.sentAt).toLocaleTimeString()}<br />
                        {new Date(em.sentAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Subject line */}
                    <div>
                      <span className="text-[9px] text-beige/30 block uppercase">SMTP SUBJECT</span>
                      <h5 className="text-[11px] font-bold text-white leading-snug">{em.subject}</h5>
                    </div>

                    {/* Styled raw body view */}
                    <div className="p-3 bg-deep-brown text-[10px] rounded border border-white/5 text-beige/85 max-h-[160px] overflow-y-auto whitespace-pre-wrap leading-relaxed font-light font-mono select-all">
                      {em.body}
                    </div>

                    {/* Sent Confirmation badge footer */}
                    <div className="flex justify-between items-center text-[8px] text-beige/40">
                      <span>STATION_ID: {em.id}</span>
                      <span className="text-green-400 font-bold flex items-center space-x-1 uppercase">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span>Simulated Sent Success</span>
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
