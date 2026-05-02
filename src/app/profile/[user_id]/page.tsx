'use client'

import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import { useAuth } from '@/context/auth_context'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User, Mail, Phone, Calendar, Clock, Hash, Venus, Mars, LogOut, Pencil, ShieldCheck } from 'lucide-react'
import React, { useState } from 'react'


function Avatar({ profile }: { profile: ProfileData }) {
  const [imgError, setImgError] = useState(false)
  const showImage = !!profile.profile_img && !imgError

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0">
      <div className="w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/6 shadow-lg">
        {showImage ? (
          <img
            src={profile.profile_img!}
            alt={profile.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-amber-400 to-orange-500">
            <span className="text-white font-bold text-2xl md:text-3xl tracking-tight select-none">
              {getInitials(profile.name)}
            </span>
          </div>
        )}
      </div>
      {profile.status && (
        <span
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-white"
          title="Active"
        />
      )}
    </div>
  )
}

function DetailItem({ icon: Icon, label, value }: {
  icon: React.ElementType
  label: string
  value: string | null | undefined
}) {
  if (!value) return null
  return (
    <div className="flex items-center gap-3 py-3 border-b border-stone-100 last:border-0">
      <div className="size-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
        <Icon size={14} className="text-primary-600" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-400">{label}</p>
        <p className="text-sm text-zinc-700 font-medium truncate">{value}</p>
      </div>
    </div>
  )
}

function StatPill({
  label,
  value,
  color = 'amber',
}: {
  label: string
  value: string
  color?: 'amber' | 'emerald' | 'violet' | 'rose'
}) {
  const colors = {
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
    rose: 'bg-rose-50 text-rose-700 border-rose-100',
  }
  return (
    <div className={`rounded-2xl border px-4 py-3 flex flex-col gap-0.5 ${colors[color]}`}>
      <span className="text-lg font-bold leading-none">{value}</span>
      <span className="text-[11px] font-semibold tracking-widest uppercase opacity-60">{label}</span>
    </div>
  )
}

function SkeletonProfile() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="rounded-3xl border border-stone-100 bg-white p-6 flex gap-5">
        <div className="w-28 h-28 rounded-2xl bg-stone-100 shrink-0" />
        <div className="flex-1 space-y-3 pt-2">
          <div className="h-5 w-36 rounded-lg bg-stone-100" />
          <div className="h-3.5 w-48 rounded bg-stone-100" />
          <div className="h-5 w-24 rounded-full bg-stone-100" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 rounded-2xl bg-stone-100" />
        ))}
      </div>
      <div className="h-52 rounded-3xl bg-stone-100" />
    </div>
  )
}

export default function Profile() {
  const { token, logout, isLoggingOut } = useAuth()

  const { data: profile, isLoading, isError, error } = useQuery<ProfileData>({
    queryKey: ['customer-profile'],
    queryFn: async () => {
      const res = await axios.get('https://www.gangapapers.in/novasac/api/customer/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      })
      return res.data.data
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
  })
  
  const accountAgeDays = profile
    ? Math.floor((Date.now() - new Date(profile.created_at).getTime()) / 86400000)
    : 0

  const GenderIcon =
    profile?.gender?.toLowerCase() === 'female'
      ? Venus
      : profile?.gender?.toLowerCase() === 'male'
        ? Mars
        : User

  return (
    <Section>
      <Wrapper>
        <div className="min-h-screen">
          <div className="max-w-2xl mx-auto space-y-4">

            {/* Page heading */}
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-xl font-bold text-zinc-800 tracking-tight">My Profile</h1>
                <p className="text-xs text-stone-400 mt-0.5">Manage your account information</p>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-100 px-3 py-1.5 rounded-xl transition-all duration-150 cursor-pointer"
              >
                {isLoggingOut ? <div className="w-4 h-4 border-2 border-primary-300 border-t-primary-600 rounded-full animate-spin" /> : <>
                  <LogOut size={13} />
                  Logout
                </>}
              </button>
            </div>

            {isLoading && <SkeletonProfile />}

            {isError && (
              <div className="rounded-3xl border border-rose-100 bg-rose-50 p-6 text-center space-y-1.5">
                <p className="text-sm font-semibold text-rose-600">Failed to load profile</p>
                <p className="text-xs text-rose-400">
                  {(error as any)?.response?.data?.message || 'Something went wrong. Please try again.'}
                </p>
              </div>
            )}

            {!isLoading && !isError && profile && (
              <>
                {/* Hero card */}
                <div className="rounded-3xl border border-stone-100 bg-white shadow-sm shadow-stone-200/60 p-5 md:p-6">
                  <div className="flex gap-4 md:gap-5 items-start">
                    <Avatar profile={profile} />
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h2 className="text-lg font-bold text-zinc-800 tracking-tight truncate leading-tight">
                            {profile.name}
                          </h2>
                          <p className="text-xs text-stone-400 truncate mt-0.5">{profile.email}</p>
                        </div>
                        <button
                          className="size-8 shrink-0 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-400 hover:text-primary-600 border border-stone-200 hover:border-amber-200 transition-all duration-150 cursor-pointer"
                          aria-label="Edit profile"
                        >
                          <Pencil size={13} />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-semibold tracking-widest uppercase">
                          <Hash size={10} />
                          {profile.customer_id}
                        </span>
                        {profile.status && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-semibold">
                            <ShieldCheck size={10} />
                            Verified
                          </span>
                        )}
                      </div>

                      {profile.bio && (
                        <p className="mt-3 text-xs text-stone-500 leading-relaxed italic line-clamp-2">
                          "{profile.bio}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <StatPill label="Days Active" value={`${accountAgeDays}d`} color="amber" />
                  <StatPill
                    label="Status"
                    value={profile.status ? 'Active' : 'Inactive'}
                    color={profile.status ? 'emerald' : 'rose'}
                  />
                  <StatPill
                    label="Login Tries"
                    value={String(profile.login_attempts)}
                    color={profile.login_attempts > 3 ? 'rose' : 'violet'}
                  />
                </div>

                {/* Details card */}
                <div className="rounded-3xl border border-stone-100 bg-white shadow-sm shadow-stone-200/60 p-5 md:p-6">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-400 mb-1">
                    Account Details
                  </p>

                  <DetailItem icon={Mail} label="Email" value={profile.email} />
                  <DetailItem icon={Phone} label="Phone" value={profile.phone_number} />
                  <DetailItem
                    icon={GenderIcon}
                    label="Gender"
                    value={
                      profile.gender
                        ? profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)
                        : null
                    }
                  />
                  <DetailItem icon={Calendar} label="Date of Birth" value={formatDate(profile.date_of_birth)} />
                  <DetailItem
                    icon={Clock}
                    label="Member Since"
                    value={formatDate(profile.created_at) ?? undefined}
                  />

                  {/* Last login — always visible */}
                  <div className="flex items-center gap-3 pt-3 mt-1 border-t border-stone-100">
                    <div className="size-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                      <Clock size={14} className="text-primary-600" />
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold tracking-widest uppercase text-stone-400">Last Login</p>
                        <p className="text-sm text-zinc-700 font-medium truncate">
                          {formatDateTime(profile.last_login_at)}
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-primary-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-lg shrink-0">
                        {timeAgo(profile.last_login_at)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Edit CTA */}
                <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm text-white bg-linear-to-r from-primary-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 shadow-md shadow-amber-200 active:scale-[0.98] transition-all duration-150 cursor-pointer">
                  <Pencil size={14} />
                  Edit Profile
                </button>
              </>
            )}

          </div>
        </div>
      </Wrapper>
    </Section>
  )
}


interface ProfileData {
  id: number
  name: string
  email: string
  customer_id: string
  google_id: string | null
  profile_img: string | null
  phone_number: string | null
  status: boolean
  date_of_birth: string | null
  gender: string | null
  bio: string | null
  login_attempts: number
  last_login_at: string
  created_at: string
  updated_at: string
}

function getInitials(name: string): string {
  return name
    .split(/[\s._@-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('')
}

function formatDate(dateStr: string | null): string | null {
  if (!dateStr) return null
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function formatDateTime(dateStr: string | null): string {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}